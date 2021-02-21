const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');
const PUBLIC_PATH = path.resolve(PROJECT_ROOT, 'public');
const SRC_PATH = path.resolve(PROJECT_ROOT, 'src');

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.tsx'),
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '~': SRC_PATH,
      assets: path.join(SRC_PATH, 'assets'),
    },
    modules: [path.resolve(SRC_PATH, 'assets'), 'node_modules'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(PUBLIC_PATH, 'index.html'),
      filename: 'index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
  ],
};
