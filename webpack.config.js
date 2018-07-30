const webpack = require('webpack');
const path = require('path');

/**
 * @type {webpack.Configuration}
 */
const config =
{
  entry: {
    app: './src/main.js',
    vendor: ['./src/lib/jquery.js', './src/lib/lodash.js'],
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/assets/'
  }
}

module.exports = config;
