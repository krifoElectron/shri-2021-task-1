const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  plugins: [new MiniCssExtractPlugin({ filename: 'stories.css' })],
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      // { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'stories.js',
  },
};
