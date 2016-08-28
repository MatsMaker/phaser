import Phaser from '../Phaser';

class Sky extends Phaser.Sprite {

  constructor(game) {
    super(game)
  }

  add() {
    let object = this.game.add.sprite(0, 0, 'sky');
    object.scale.set(2);
  }

}

export default Sky;
