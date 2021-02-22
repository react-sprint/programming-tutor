const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: '4001',
    disableHostCheck: true,
    historyApiFallback: true,
  },
  optimization: {
    removeEmptyChunks: false,
    splitChunks: false,
  },
});
