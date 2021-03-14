import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import { healthRouter } from './routes/health.router';
import { Route } from './routes/route.enum';
import { streamLogger, logger } from './logger/logger';
import { requestIdMiddleware } from './middleware/requestIdMiddleware.ts/requestIdMiddleware';
// import { MemoryStore } from './store/MemoryStore';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const port = process.env.PORT ?? 3001;
const routeBase = process.env.BASE_URL ?? '';
const logLevel = process.env.LOG_LEVEL ?? '';
// const store = new MemoryStore();

const app: express.Application = express();

app.use(requestIdMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(logLevel, { stream: streamLogger }));

app.get(`${routeBase}/${Route.Health}`, healthRouter);

app.listen(port, () => {
  logger.info(`--- NODE_ENV: ${process.env.NODE_ENV}`);
  logger.info(`App is listening on port ${port}!`);
});
