require('p2');
require('pixi.js');
const Phaser = require('phaser');


const GameWrap = class {

  constructor() {
    this.Phaser = Phaser;
    this.game;
  }

  initGame(gameOptions) {
    this.game = new this.Phaser.Game(...gameOptions);
  }

};

export default GameWrap;
