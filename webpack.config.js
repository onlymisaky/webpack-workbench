const webpack = require('webpack');
const path = require('path');

/**
 * @type {webpack.Configuration}
 */
const config = {
  entry: {
    login: './src/login.js',
    logout: './src/logout.js'
  },
  // entry: './src/login.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: '/assets/'
  }
}

module.exports = config;
