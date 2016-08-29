import Phaser from '../Phaser';


class Preloader {

  constructor() {
    this.preloadBar = null;
  }

  preload() {
    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'sky');
    this.preloadBar.anchor.setTo(0.5,0.5);

    this.time.advancedTiming = true;
    this.load.setPreloadSprite(this.preloadBar);
  }

  create() {
    this.state.start('Level1');
  }

}

export default Preloader;
