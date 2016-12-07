const webpack = require('webpack');
const { join, resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, 'src/main.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: 'http://0.0.0.0:9000/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: join(__dirname, 'src'),
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'CLIENT': JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
  ]
};
