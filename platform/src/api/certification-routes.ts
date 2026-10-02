/**
 * Certification Routes
 */

import { Router, Request, Response } from 'express';

export const certificationRoutes = Router();

// Get all certifications
certificationRoutes.get('/', (req: Request, res: Response) => {
  res.json({
    certifications: [],
    message: 'Certification endpoints coming soon',
  });
});

// Get certification by ID
certificationRoutes.get('/:id', (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    message: 'Certification endpoints coming soon',
  });
});
