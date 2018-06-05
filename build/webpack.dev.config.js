/**
 * Created by luyi-netease on 2016/7/14.
 */
'use strict';
const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.base.config');
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseConfig, {
   devtool: 'cheap-source-map',
   module: {
   　　rules: [
      　　 {
      　　  test: /\.css$/,
      　　  use: [
               'vue-style-loader',
         　　 　　"css-loader"
      　　 ]
   　　  }
   　　  ]
　　 },
   devServer: {
      clientLogLevel: 'warning',
      historyApiFallback: true,
      hot: true,
      compress: true,
      host: HOST || config.dev.host,
      port: PORT || config.dev.port,
      open: config.dev.autoOpenBrowser,
      overlay: config.dev.errorOverlay
        ? { warnings: false, errors: true }
        : false,
      publicPath: config.dev.assetsPublicPath,
      proxy: config.dev.proxyTable,
      quiet: true, // necessary for FriendlyErrorsPlugin
      watchOptions: {
        poll: config.dev.poll,
      }
    },
    plugins: [
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('development')
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
      new webpack.NoEmitOnErrorsPlugin(),
      // https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
    ]
});

module.exports = devWebpackConfig;