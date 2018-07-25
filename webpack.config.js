const webpack = require('webpack');
const path = require('path');

/**
 * @type {webpack.Configuration}
 */
const config = {
  entry: {
    login: './src/login.js',
    logout: './src/logout.js'
  }
}

module.exports = config;
