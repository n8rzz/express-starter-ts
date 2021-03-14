module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.(ts|js)', '!**/coverage/**', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  // coverageThreshold: {
  //   global: {
  //     branches: 50,
  //     functions: 50,
  //     lines: 50,
  //     statements: 50,
  //   },
  // },
  globals: { 'ts-jest': { diagnostics: false } },
  roots: ['<rootDir>/src'],
  setupFiles: ['./.jest/globalTestSetup.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules', 'build'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
