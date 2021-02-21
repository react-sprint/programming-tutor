const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const PUBLIC_PATH = path.resolve(PROJECT_ROOT, "public");
const CONFIG_PATH = path.resolve(PROJECT_ROOT, "configs");
const SRC_PATH = path.resolve(PROJECT_ROOT, "src");

module.exports = {
  entry: path.resolve(SRC_PATH, "index.tsx"),
  output: {
    filename: "js/[name].js",
    chunkFilename: "js/[name].chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(PUBLIC_PATH, "index.html"),
      filename: "index.html",
    }),
  ],
};
