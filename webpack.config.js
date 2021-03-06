'use strict'
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development';
const path = require('path');
module.exports = {

  mode: process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'production',
  entry: { main: './project/src/js/main.js' },
  output: {
    path: path.resolve(__dirname, './project/build/js/'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}