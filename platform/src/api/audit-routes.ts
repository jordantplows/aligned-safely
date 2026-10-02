/**
 * Audit Routes
 */

import { Router, Request, Response } from 'express';

export const auditRoutes = Router();

// Get all audits
auditRoutes.get('/', (req: Request, res: Response) => {
  res.json({
    audits: [],
    message: 'Audit endpoints coming soon',
  });
});

// Get audit by ID
auditRoutes.get('/:id', (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    message: 'Audit endpoints coming soon',
  });
});
