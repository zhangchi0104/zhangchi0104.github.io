const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const opts = {
  mode: "development",
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
};
module.exports = merge(common, opts);
