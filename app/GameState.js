import Phaser from './Phaser';

const skyImg = require('./assets/sky.png');
const starImg = require('./assets/star.png');

import Sky from './objects/Sky';
import Star from './objects/Star';
import Text from './objects/Text';

class GameState extends Phaser.State {

  preload() {
    this.game.load.image('sky', skyImg);
		this.game.load.image('star', starImg);
  }

  create() {
    let life = new Text(this.game, 15, 15, 'My game');
    let sky = new Sky(this.game);
		let star = new Star(this.game);
		star.add();
  }

  update() {
  }

  render() {

  }

}

export default GameState;
