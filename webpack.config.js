const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const base = require("./webpack.config.base.js"); // 继承

module.exports = {
  ...base, // 引入base的所有属性
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
