module.exports = {
  displayName: 'daily-horoscope',
  preset: 'react-native',
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  "transformIgnorePatterns": [
    "node_modules/(?!(@react-native|react-native|react-native-elements|react-native-size-matters|react-native-vector-icons|@react-navigation)/)"
  ],
  transform: {
    '\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': require.resolve(
      'react-native/jest/assetFileTransformer.js'
    ),
  },
};
