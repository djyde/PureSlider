var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/pureslider.js',
  output: {
    filename: 'pureslider.dist.js',
    path: './dist',
    library: 'PureSlider',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015'
      }
    ]
  }
}