import 'react-native-gesture-handler/jestSetup';
import { jest } from '@jest/globals';

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = jest.fn();

  return Reanimated;
});

jest.mock(
  '../../node_modules/react-native/Libraries/Animated/NativeAnimatedHelper'
);

jest.useFakeTimers();
