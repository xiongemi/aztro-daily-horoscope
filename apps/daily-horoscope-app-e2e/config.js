module.exports = {
  preset: '../../jest.preset',
  testEnvironment: 'node',
  testRunner: 'jest-jasmine2',
  testTimeout: 120000,
  reporters: ['detox/runners/jest/streamlineReporter'],
  bail: true,
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
};
