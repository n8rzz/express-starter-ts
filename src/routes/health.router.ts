import * as express from 'express';
import { HealthController } from '../domain/health/health.controller';

export function healthRouter(): express.Router {
  const router: express.Router = express.Router();
  const controller = new HealthController();

  router.get('/', (req, res) => controller.get(req, res));

  return router;
}
