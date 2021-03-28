const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'stories.js',
  },
  // plugins: [new HtmlWebpackPlugin()],
};
