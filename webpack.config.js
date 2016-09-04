var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
  	'whatwg-fetch',
    'babel-polyfill',
    './js/app.js'
  ],
  output: {
      publicPath: '/',
      filename: 'js/script.js'
  },
  debug: false,
  // devtool: 'source-map',
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};