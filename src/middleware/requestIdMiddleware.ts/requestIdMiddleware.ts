import { v4 as uuid } from 'uuid';
import * as express from 'express';
import { HeaderEnum } from '../../constants/header.constant';

export const requestIdMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  if (!Boolean(req.headers[HeaderEnum.RequestId])) {
    req.headers[HeaderEnum.RequestId] = uuid();
  }

  next();
};
