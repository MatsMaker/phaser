require('p2');
require('pixi.js');
const Phaser = require('phaser');

require('./styles/main.scss');


import preload from './preload';
import create from './create';
import update from './update';

let gameWrap = {
  Phaser: Phaser,
};

gameWrap.game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload(gameWrap),
  create: create(gameWrap),
  update: update(gameWrap)
});

export default gameWrap;
