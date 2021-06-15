import { cleanup, init, device } from 'detox';
import adapter from 'detox/runners/jest/adapter';
import '@testing-library/jest-dom';
import '@testing-library/jest-native/extend-expect';

const config = require('./.detoxrc.json');

jest.setTimeout(120000);
// jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await init(config, { launchApp: false });
  await device.launchApp();
});

beforeEach(async function () {
  // await adapter.beforeEach();
});

afterAll(async () => {
  // await adapter.afterAll();
  await cleanup();
});

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
