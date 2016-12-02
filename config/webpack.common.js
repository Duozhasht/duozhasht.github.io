var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      },
      {
        test: /\.(ttf|eot|woff2?|svg|png|jpe?g|json|mp4|gif)(\?.*)?$/,
        loader: 'file'
      },
      /*
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      */
      {
        test: /\.css$/,
        //include: helpers.root('src', 'app'),
        loaders: ["style", "css"]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      minify: false
    }),
    new CopyWebpackPlugin([
      { from: 'src/app/assets', to: 'assets' }
    ]),
  ]
};