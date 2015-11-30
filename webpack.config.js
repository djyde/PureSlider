var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/pureslider.js',
  output: {
    filename: 'pureslider.js',
    path: './lib',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015'
      }
  }
}