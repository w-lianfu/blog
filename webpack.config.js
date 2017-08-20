const webpack = require('webpack')
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, './src/app.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    port: 8000,
    hot: true,
    inline: true
  }
  /*
  plugins: [
    new HtmlWebpackPlugin()
  ]
  */
}
