/**
 * Billing Routes
 */

import { Router, Request, Response } from 'express';

export const billingRoutes = Router();

// Get billing information
billingRoutes.get('/', (req: Request, res: Response) => {
  res.json({
    billing: [],
    message: 'Billing endpoints coming soon',
  });
});

// Get invoice by ID
billingRoutes.get('/invoices/:id', (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    message: 'Billing endpoints coming soon',
  });
});
