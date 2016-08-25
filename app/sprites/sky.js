const skyImg = require('../assets/sky.png');


export function load(gameWrap) {
  gameWrap.game.load.image('sky', skyImg);
}

export function init(gameWrap) {
  //  A simple background for our game
  gameWrap.game.add.sprite(0, 0, 'sky');
}


export default {
  init,
  load
}
