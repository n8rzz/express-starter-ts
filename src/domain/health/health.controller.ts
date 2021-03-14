import * as express from 'express';

export class HealthController {
  public get(req: express.Request, res: express.Response): void {
    res.send('Ok!');
  }
}
