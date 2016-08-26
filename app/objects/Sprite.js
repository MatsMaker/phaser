import Phaser from '../Phaser'


class Sprite extends Phaser.Sprite {

  constructor(game, x, y, key, frame) {
    super(game, x, y, key, frame);
  }

  addToStage() {
    this.game.stage.addChild(this);
  }

}

export default Sprite;
