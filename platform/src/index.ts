/**
 * AlignedSafely Platform - Main Entry Point
 * The trusted authority for AI safety certification
 */

import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { createLogger } from './utils/logger';
import { errorHandler } from './middleware/error-handler';
import { apiRouter } from './api/routes';
import { initDatabase } from './database/connection';

// Load environment variables
dotenv.config();

const logger = createLogger('Server');

// Create Express app
const app: Express = express();
const PORT = process.env.PORT || 3000;

// ================================================================
// MIDDLEWARE
// ================================================================

// Security headers - allow inline scripts for Design Component runtime
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://unpkg.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      connectSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// CORS
const corsOrigins = process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'];
app.use(cors({
  origin: corsOrigins,
  credentials: true,
}));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('user-agent'),
  });
  next();
});

// ================================================================
// STATIC FILES
// ================================================================

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// ================================================================
// ROUTES
// ================================================================

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
  });
});

// API routes
app.use('/api/v1', apiRouter);

// Stripe webhooks (raw body needed for signature verification)
app.post('/webhooks/stripe',
  express.raw({ type: 'application/json' }),
  async (req: Request, res: Response) => {
    try {
      // Import webhook handler
      const { handleStripeWebhook } = await import('./webhooks/stripe');
      await handleStripeWebhook(req, res);
    } catch (error) {
      logger.error('Stripe webhook error:', error);
      res.status(400).send('Webhook error');
    }
  }
);

// Serve index.html for all non-API routes (SPA fallback)
app.get('*', (req: Request, res: Response, next: NextFunction) => {
  // Skip if it's an API route
  if (req.path.startsWith('/api/') || req.path.startsWith('/webhooks/')) {
    return next();
  }
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 404 handler for API routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// Error handler (must be last)
app.use(errorHandler);

// ================================================================
// SERVER STARTUP
// ================================================================

async function startServer() {
  try {
    // Initialize database (optional for development)
    if (process.env.DATABASE_URL) {
      logger.info('Connecting to database...');
      await initDatabase();
      logger.info('Database connected successfully');
    } else {
      logger.warn('DATABASE_URL not set - running without database');
    }

    // Start server
    app.listen(PORT, () => {
      logger.info(`🚀 AlignedSafely Platform running on port ${PORT}`);
      logger.info(`📊 API: http://localhost:${PORT}/api/v1`);
      logger.info(`🏥 Health: http://localhost:${PORT}/health`);
      logger.info(`🌍 Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server');
  process.exit(0);
});

// Start the server
startServer();

export { app };
