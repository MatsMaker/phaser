const platformImg = require('./assets/platform.png');
const starImg = require('./assets/star.png');
const dude = require('./assets/dude.png');

import sky from './sprites/sky';

const preload = (gameWrap) => () => {

  sky.load(gameWrap);
  gameWrap.game.load.image('ground', platformImg);
  gameWrap.game.load.image('star', starImg);
  gameWrap.game.load.spritesheet('dude', dude, 32, 48);

}

export default preload;
