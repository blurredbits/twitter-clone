'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './test/ArtistSpec',

  output: {
    path: './test',
    filename: 'spec.js',
    publicPath: '/test/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
