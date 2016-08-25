var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');


module.exports = {
  entry: path.join(__dirname, 'app', 'main.js'),
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /p2.js/,
      loader: "script"
    }, {
      test: /pixi.js/,
      loader: "script"
    }, {
      test: /phaser.js/,
      loader: "script"
    }]
  },
  resolve: {
    alias: {
      'pixi.js': pixi,
      'p2': p2,
      'phaser': phaser,
    }
  },
  split: true,
  devtool: 'eval',
  progress: true,
  colors: true,
  watch: true,
  plugins: [new HtmlWebpackPlugin()],
};
