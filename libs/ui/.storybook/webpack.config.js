const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const rootWebpackConfig = require('../../../.storybook/webpack.config');
const path = require('path');

/**
 * Export a function. Accept the base config as the only param.
 *
 * @param {Parameters<typeof rootWebpackConfig>[0]} options
 */
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });

  const tsPaths = new TsconfigPathsPlugin({
    configFile: './tsconfig.base.json',
  });

  config.resolve.plugins
    ? config.resolve.plugins.push(tsPaths)
    : (config.resolve.plugins = [tsPaths]);

  // Found this here: https://github.com/nrwl/nx/issues/2859
  // And copied the part of the solution that made it work

  const svgRuleIndex = config.module.rules.findIndex((rule) => {
    const { test } = rule;

    return test?.toString()?.startsWith('/\\.(svg|ico');
  });
  config.module.rules[
    svgRuleIndex
  ].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

  const babelLoader = config.module.rules.find(
    (rule) => rule?.test === /\.(mjs|tsx?|jsx?)$/
  );
  if (babelLoader) {
    babelLoader.include = [
      ...babelLoader.include,
      path.resolve(__dirname, '../../node_modules/react-native-elements'),
      path.resolve(__dirname, '../../node_modules/react-native-vector-icons'),
      path.resolve(__dirname, '../../node_modules/react-native-ratings'),
    ];
    babelLoader.options.plugins = [
      'react-native-web',
      '@babel/plugin-proposal-class-properties',
    ];
  }
  console.log(config.module.rules);

  config.module.rules.push(
    {
      test: /\.(png|jpe?g|gif|webp)$/,
      loader: require.resolve('url-loader'),
      options: {
        limit: 10000, // 10kB
        name: '[name].[hash:7].[ext]',
      },
    },
    {
      test: /\.svg$/,
      oneOf: [
        // If coming from JS/TS file, then transform into React component using SVGR.
        {
          issuer: {
            test: /\.[jt]sx?$/,
          },
          use: [
            {
              loader: require.resolve('@svgr/webpack'),
              options: {
                svgo: false,
                titleProp: true,
                ref: true,
              },
            },
            {
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000, // 10kB
                name: '[name].[hash:7].[ext]',
                esModule: false,
              },
            },
          ],
        },
        // Fallback to plain URL loader.
        {
          use: [
            {
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000, // 10kB
                name: '[name].[hash:7].[ext]',
              },
            },
          ],
        },
      ],
    }
  );

  return config;
};
