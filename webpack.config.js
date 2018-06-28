const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: './public',
    port: 3000,
    compress: true,
  },

  entry: ['babel-polyfill', './src/index.jsx'],

  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
