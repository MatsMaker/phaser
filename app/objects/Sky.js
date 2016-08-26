import Phaser from '../Phaser';

class Sky extends Phaser.Sprite {

  constructor(game) {
    super(game)
  }

  add() {
    this.game.add.sprite(0, 0, 'sky');
  }

}

export default Sky;
