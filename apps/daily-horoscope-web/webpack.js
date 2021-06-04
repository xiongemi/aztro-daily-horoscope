const getWebpackConfig = require('@nrwl/react/plugins/webpack');

function getCustomWebpackConfig(webpackConfig) {
  const config = getWebpackConfig(webpackConfig);
  const isProduction = webpackConfig.mode === 'production';

  if (!isProduction) {
    config.resolve.alias = {
      'react-native': 'react-native-web',
    };

    config.module.rules.push(
      {
        test: /\.ttf$/,
        loader: require.resolve('file-loader'),
        options: { esModule: false, name: 'static/media/[path][name].[ext]' },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: function (content) {
          return (
            /node_modules/.test(content) &&
            !/\/react-native-elements\//.test(content) &&
            !/\/react-native-vector-icons\//.test(content) &&
            !/\/react-native-ratings\//.test(content)
          );
        },
        use: {
          loader: require.resolve('@nrwl/web/src/utils/web-babel-loader.js'),
          options: {
            presets: [
              [
                '@nrwl/react/babel',
                {
                  runtime: 'automatic',
                  useBuiltIns: 'usage',
                },
              ],
            ],
            plugins: ['react-native-web'],
          },
        },
      }
    );
  }

  return config;
}

module.exports = getCustomWebpackConfig;
