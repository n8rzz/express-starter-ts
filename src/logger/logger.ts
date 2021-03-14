import * as winston from 'winston';

const errorFileTransport = new winston.transports.File({
  filename: 'error.log',
  level: 'error',
  handleExceptions: true,
  format: winston.format.json(),
});
const warnFileTransport = new winston.transports.File({
  filename: 'warn.log',
  level: 'warn',
  format: winston.format.json(),
});
const fileTransport = new winston.transports.Http({
  level: 'warn',
  format: winston.format.json(),
});
const consoleTransport = new winston.transports.Console({
  level: 'info',
  handleExceptions: true,
  format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
});

export const logger = winston.createLogger({
  exitOnError: false,
  format: winston.format.json(),
  transports: [errorFileTransport, warnFileTransport, fileTransport, consoleTransport],
});

export const streamLogger = {
  write: (text: string): void => {
    logger.info(text.trim());
  },
};
