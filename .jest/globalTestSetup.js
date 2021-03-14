// eslint-env jest
// placeholder for possible future setup tasks

global.console = Object.assign({}, global.console, {
  error: jest.fn(),
  warn: jest.fn(),
});
