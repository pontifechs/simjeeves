const path = require('path');

const commonConfig = {
  node: {
    __dirname: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [
  Object.assign(
    {
      target: 'electron-main',
      entry: { main: './src/main.js' }
    },
    commonConfig),
  Object.assign(
    {
      target: 'electron-renderer',
      entry: { gui: './src/gui.js' },
      plugins: [
        new HtmlWebpackPlugin(
          {
            'template': './src/index.html'
          }
        )
      ]
    },
    commonConfig)
];
