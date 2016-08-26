import Phaser from '../Phaser'

class ArcadePhysic {

  constructor(game) {
    this.game = game;
  }

  startSystem() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  }

};

export default ArcadePhysic;
