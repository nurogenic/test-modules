const path = require('path');

module.exports = {
  entry: {
      renderer: './src/renderer.js',
      test: './src/test-module/index.js', 
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module:  {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
          }
      ]
  }
};