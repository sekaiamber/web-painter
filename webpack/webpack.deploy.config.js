var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var routes = require('./routes');

var config = {
  context: path.join(__dirname, '..', '/app'),
  target: "electron-renderer",
  entry: {
    vendors: ['react', 'react-router', 'react-dom', 'jquery', 'antd', 'bootstrap'],
  },
  output: {
    path: path.join(__dirname, '..', '/dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false, // judge if dev environment.
      __PRODUCTION__: true,
      __STAGE__: false
    }),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CommonsChunkPlugin({
      names: ['vendors'],
      filename: '[name].js',
      minChunks: Infinity
    }),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 30000 }),
    new webpack.optimize.OccurenceOrderPlugin(false),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    }),
    new CopyWebpackPlugin([
      { from: '../assets', to: 'assets' },
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
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
        loader: 'url?limit=5000!img?progressive=true'
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
    ]
  },
  resolve: {
    // 設定後只需要寫 require('file') 而不用寫成 require('file.jsx')
    extensions: ['', '.js', '.json', '.jsx'],
    alias: {
      wpconfig: path.join(__dirname, 'config', 'deploy')
    }
  },
  sassLoader: {
    data: `$env: __PRODUCTION__;`
  }
};

for (var i = 0; i < routes.length; i++) {
  var route = routes[i];
  config.entry[route.name] = route.entry;
  config.plugins.push(new HtmlWebpackPlugin({
    template: route.plugins.template || './../templates/index.html',
    filename: route.plugins.filename || 'index.html',
    favicon: './../assets/images/sekai.jpg',
    chunks: ['vendors', route.name],
    inject: 'body',
    hash: false
  }));
}

module.exports = config;
