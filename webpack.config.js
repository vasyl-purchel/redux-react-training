const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug   : true,
  target  : 'web',
  devtool : 'sourcemap',
  plugins : [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('application.css'),
  ],
  entry  : './scripts/main.js',
  output : {
    path       : './public/assets',
    publicPath : '/assets/',
    filename   : 'application.js',
  },
  resolve : {
    extensions : ['', '.js', '.jsx'],
  },
  module : {
    loaders : [
      {
        test    : /\.(js|jsx)$/,
        loader  : 'babel-loader',
        exclude : /node_modules/,
      },

      {
        test   : /\.scss$/,
        loader : ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },

      {
        test   : /\.(png|jpg|gif|eot|woff2|ttf|woff|svg)$/,
        loader : 'url?limit=800&name=[name].[ext]',
      },
    ],
  },
};
