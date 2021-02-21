const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "js/[name].[contenthash:8].js",
    chunkFilename: "js/[name].[contenthash:8].chunk.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendor",
          enforce: true,
          priority: 1,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
  plugins: [],
});
