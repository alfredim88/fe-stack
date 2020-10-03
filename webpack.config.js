var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
  entry: {
    main: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/main.js'
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'

  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  module: {
      rules: [
          {
              test: /\.js?$/,
              include: path.join(__dirname, 'src'),
              use: {
                loader: 'babel-loader'
              }
          },
          {
              test: /\.scss$/,
              include: path.join(__dirname, 'src'),
              use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
              ]
          }
      ]
  }
};
