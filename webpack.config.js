const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const styleLoader = process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader';

/**
 * @type {webpack.Configuration}
 */
const webpackConfiguration = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname + '/src'
    },
    { test: /\.tsx?$/, use: 'ts-loader' },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { modules: true }
        }
      ]
    },
    {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: { modules: true }
        },
        { loader: 'postcss-loader' },
        { loader: 'less-loader' }
      ]
    },
    {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: { modules: true }
        },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]'
        }
      }]
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true,
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin('dist', {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
    contentBase: 'static'
  },
};

module.exports = webpackConfiguration;
