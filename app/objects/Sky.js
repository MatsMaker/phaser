const skyImg = require('../assets/sky.png');

import Phaser from '../Phaser';


class Sky extends Phaser.Sprite {

  constructor(game) {
    super(game);

    this._x = 0;
    this._y = 0;
    this._key = 'sky';

    game.add.sprite(0, 0, 'sky');
  }

  preload(game) {
    this.game.load.image('sky', skyImg);
  }

}


export default Sky;
