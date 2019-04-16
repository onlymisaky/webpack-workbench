const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { getNpmargv } = require('./utils');
const rules = require('./loaders');

const entry = getNpmargv('entry') || 'main.ts';

/**
 * @type {import('webpack').Configuration}
 */
const webpackCommonConfig = {
  entry: path.resolve('src/', entry),
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: { rules },
  resolve: {
    alias: {
      '@': path.resolve('src')
    },
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeTagWhitespace: true,
      }
    })
  ]
};

module.exports = webpackCommonConfig;
