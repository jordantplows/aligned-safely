/**
 * API Routes
 */

import { Router } from 'express';
import { certificationRoutes } from './certification-routes';
import { auditRoutes } from './audit-routes';
import { monitoringRoutes } from './monitoring-routes';
import { billingRoutes } from './billing-routes';

export const apiRouter = Router();

// Mount route modules
apiRouter.use('/certifications', certificationRoutes);
apiRouter.use('/audits', auditRoutes);
apiRouter.use('/monitoring', monitoringRoutes);
apiRouter.use('/billing', billingRoutes);

// API info
apiRouter.get('/', (req, res) => {
  res.json({
    name: 'AlignedSafely API',
    version: '1.0.0',
    description: 'AI Safety Certification Platform API',
    documentation: 'https://docs.alignedsafely.com',
    endpoints: {
      certifications: '/api/v1/certifications',
      audits: '/api/v1/audits',
      monitoring: '/api/v1/monitoring',
      billing: '/api/v1/billing',
    },
  });
});
