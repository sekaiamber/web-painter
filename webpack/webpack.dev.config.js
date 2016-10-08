var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var routes = require('./routes');

var configVars = require('./config/dev');

var config = {
  context: path.join(__dirname, '..', '/app'),
  target: "electron-renderer",
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
    new ExtractTextPlugin("[name].css"),
    new CopyWebpackPlugin([
      { from: '../assets', to: 'assets' },
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /^((?!\._noprocess_\.).)*\.css$/i,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}')
      },
      {
        test: /^((?!\._noprocess_\.).)*\.scss$/i,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass')
      },
      {
        test: /\._noprocess_\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'raw!autoprefixer?{browsers:["last 2 version", "> 1%"]}')
      },
      {
        test: /\._noprocess_\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'raw!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass')
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=10000!img?progressive=true'
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.wpexport$/,
        loader: 'raw'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
    noParse: []
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    alias: {
      wpconfig: path.join(__dirname, 'config', 'dev')
    }
  },
  devtool: 'eval-source-map',
  node: {
    __dirname: false,
  },
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
  sassLoader: {
    data: `$env: __DEV__;`
  }
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
