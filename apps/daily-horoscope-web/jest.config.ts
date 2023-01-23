/* eslint-disable */
export default {
  displayName: 'daily-horoscope-web',
  preset: 'react-native-web',
  testRunner: 'jest-jasmine2',
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@rneui|react-native-size-matters|react-native-vector-icons|@react-navigation)',
  ],
  moduleNameMapper: {
    '.svg': '@nrwl/react-native/plugins/jest/svg-mock',
  },
  transform: {
    '\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf)$': require.resolve(
      'react-native/jest/assetFileTransformer.js'
    ),
  },
};
