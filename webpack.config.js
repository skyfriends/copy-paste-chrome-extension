require('dotenv').config();
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { DefinePlugin, EnvironmentPlugin } = require('webpack');

const production = process.env.NODE_ENV === 'production';

let plugins = [
  new ExtractPlugin('bundle.[hash].css'),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
  new HTMLPlugin({
    inject: true,
    chunks: ['popup'],
    filename: 'popup.html',
    template: './src/popup.html',
  }),
  new CopyWebpackPlugin([{ from: './src/manifest.json' }]),
];

if (production) {
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}

module.exports = {
  plugins,
  entry: {
    popup: './src/popup.js',
  },
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
    publicPath: process.env.CDN_URL,
  },
  devServer: { historyApiFallback: true },
  devtool: production ? undefined : 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
