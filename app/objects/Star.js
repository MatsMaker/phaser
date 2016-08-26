import Phaser from '../Phaser'


class Star extends Phaser.Sprite {

  constructor(game) {
    super(game);
  }

  add() {
    this.game.add.sprite(0, 0, 'star');
  }

}

export default Star;
