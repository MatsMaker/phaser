import Phaser from '../Phaser';

const sly = require('../assets/sky.png');

class Boot {

  init() {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
  }

  preload() {
    this.load.image('sky', sly);
  }

  create() {
    this.state.start('Preloader');
  }

}

export default Boot;
