import { initControl } from './player/player';

const update = (gameWrap) => () => {

  gameWrap.game.physics.arcade.collide(gameWrap.player, gameWrap.platforms);

  initControl(gameWrap);
}

export default update;
