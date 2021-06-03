const path = require('path');

const getWebpackConfig = require('@nrwl/react/plugins/webpack');

function getCustomWebpackConfig(webpackConfig) {
  const config = getWebpackConfig(webpackConfig);
  const isProduction = webpackConfig.mode === 'production';

  if (!isProduction) {
    const babelLoader = config.module.rules.find((rule) =>
      rule.loader.toString().includes('babel-loader')
    );
    babelLoader.include = [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, '../../libs/ui'),
      path.resolve(__dirname, '../../node_modules/react-native-elements'),
      path.resolve(__dirname, '../../node_modules/react-native-vector-icons'),
      path.resolve(__dirname, '../../node_modules/react-native-ratings'),
    ];

    config.module.rules.push({
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, '../../node_modules/react-native-elements'),
        path.resolve(__dirname, '../../node_modules/react-native-vector-icons'),
        path.resolve(__dirname, '../../node_modules/react-native-ratings'),
      ],
    });
  }

  return config;
}

module.exports = getCustomWebpackConfig;
