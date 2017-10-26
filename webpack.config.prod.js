import webpack from 'webpack';
import path from 'path';
import webpackMd5hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

var HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
  devtool: 'source-map',
  entry: {
    vendor:path.resolve(__dirname, 'src/vendor'),
    main:path.resolve(__dirname, 'src/index')
},
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpackMd5hash(),
    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor'
    }),
    new HtmlWebpackPlugin({
        template:'src/index.html',
        minify:{
            removeComments: true,
            collapseWhitespace:true,
            removeRedundantAttributes:true,
            useShortDoctype:true,
            removeEmptyAttributes:true,
            removeStyleLinkTypeAttributes:true,
            keepClosingSlash:true,
            minifyJS:true,
            minifyCSS:true,
            minifyURLs:true
    },
        inject:true,
trackJSToken:'your token goes here'
     }),
      //avoid duplicate plugins when bundle
      new webpack.optimize.DedupePlugin(),
      //minify js
      new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, use: ExtractTextPlugin.extract({
fallback:'style-loader',
use:'css-loader'
      })
    }
    ]
  }
}
