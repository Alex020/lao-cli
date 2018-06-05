/**
 * webpack基本配置文件
 * Created by luyi-netease on 2016/7/14.
 */
'use strict';
const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// webpack基本配置
module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js'
   },
   resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
         vue$: "vue/dist/vue.js",
         "@": path.join(__dirname, "..", "src"),
         'components': path.resolve(__dirname, '../src/components'),
      }
   },
   module: {
      rules: [
         {
           test: /\.vue$/,
           loader: "vue-loader",
           options: {
            loaders: {
               js: 'babel-loader',
               css: 'css-loader'
            }
           }
         },
         {
           test: /\.js$/,
           loader: "babel-loader",
           exclude: /node_modules/
         },
         // {
         //    test: /\.css$/,
         //    use: [
         //      'vue-style-loader',
         //      'css-loader'
         //    ]
         //  },
         {
           test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
           loader: "url-loader",
           options: {
             limit: 10000
           }
         },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "media/[name].[hash:7].[ext]"
            }
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "fonts/[name].[hash:7].[ext]"
            }
          }
      ]
   },
   plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin()
   ]
}
