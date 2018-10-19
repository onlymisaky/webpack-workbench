module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
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
      use: ['style-loader',
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
          limit: 10000, // 10KB 转换为base64
          name: 'images/[name].[ext]' // 拷贝到 images 目录下
        }
      }]
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true // 开启压缩
        }
      }]
    }]
  }
};
