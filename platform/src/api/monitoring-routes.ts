/**
 * Monitoring Routes
 */

import { Router, Request, Response } from 'express';

export const monitoringRoutes = Router();

// Get monitoring status
monitoringRoutes.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'operational',
    message: 'Monitoring endpoints coming soon',
  });
});

// Get monitoring metrics
monitoringRoutes.get('/metrics', (req: Request, res: Response) => {
  res.json({
    metrics: [],
    message: 'Monitoring endpoints coming soon',
  });
});
