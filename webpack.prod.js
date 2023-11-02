const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const opts = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
};
module.exports = merge(common, opts);
