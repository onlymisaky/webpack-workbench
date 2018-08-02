const webpack = require('webpack');

/**
 * @type {webpack.Configuration}
 */
const config = {
  entry: {
    app: './src/main.js',
    vendor: ['./src/lib/jquery.js', './src/lib/lodash.js'],
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['env'] },
        include: __dirname + '/src'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}

module.exports = config;
