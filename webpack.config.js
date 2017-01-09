'use strict'

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  watch: true,
  target: 'node',
  externals: [ nodeExternals({
    whitelist: [
      'react', 'react-dom', 'redux', 'react-redux', 'thunk', 'lodash', 'redux-logger', 'redux-promise'
     ]
  }) ],
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
}
