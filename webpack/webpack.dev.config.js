var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var routes = require('./routes');

var config = {
  context: path.join(__dirname, '..', '/app'),
  target: "electron",
  entry: {},
  output: {
    path: path.join(__dirname, '..', '/build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true, // judge if dev environment.
      __PRODUCTION__: false,
      __STAGE__: false
    }),
    new ExtractTextPlugin("[name].css")
  ],
  // node: {
  //   fs: "empty"
  // },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}')
      },
      {
        test: /\.scss$/,
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass')
        loader: 'style-loader!css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=10000!img?progressive=true'
      },
      {
        test: /\.(eot|woff|ttf|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.wpexport$/,
        loader: 'raw'
      }
    ],
    noParse: []
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    alias: {}
  },
  devtool: 'eval-source-map',
  // jshint: {
  //   "esnext": true
  // },
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    historyApiFallback: {
      index: 'index.html',
      rewrites: []
    },
    proxy: {
      '/assets/*': {
        target: 'http://0.0.0.0:8889',
        secure: false
      },
    //   '/_dev_api_/*': {
    //     target: 'http://106.75.8.227',
    //     secure: false,
    //     rewrite: function(req) {
    //       req.url = req.url.replace(/^\/_dev_api_/, '');
    //     }
    //   }
    }
  },
};

for (var i = 0; i < routes.length; i++) {
  var route = routes[i];
  config.entry[route.name] = route.entry;
  config.plugins.push(new HtmlWebpackPlugin({
    template: route.plugins.template,
    filename: route.plugins.filename,
    favicon: './../assets/images/sekai.jpg',
    chunks: [route.name],
    inject: 'body'
  }));
  if (route.rewrite) {
    config.devServer.historyApiFallback.rewrites.push({
      from: route.rewrite,
      to: '/' + route.plugins.filename
    });
  }
}

module.exports = config;
