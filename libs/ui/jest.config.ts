/* eslint-disable */
export default {
  displayName: 'ui',
  preset: 'react-native',

  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@rneui|react-native-size-matters|react-native-vector-icons|@react-navigation)/)',
  ],
  moduleNameMapper: {
    '.svg': '@nrwl/react-native/plugins/jest/svg-mock',
  },
};
