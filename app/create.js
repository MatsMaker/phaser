import addPhysics from './physics';
import sky from './sprites/sky';
import { addPlayer } from './player/player';

const create = (gameWrap) => () => {

  addPhysics(gameWrap);
  sky.init(gameWrap);

  //  The platforms group contains the ground and the 2 ledges we can jump on
  gameWrap.platforms = gameWrap.game.add.group();

  //  We will enable physics for any object that is created in this group
  gameWrap.platforms.enableBody = true;

  // Here we create the ground.
  gameWrap.ground = gameWrap.platforms.create(0, gameWrap.game.world.height - 64, 'ground');

  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  gameWrap.ground.scale.setTo(2, 2);

  //  This stops it from falling away when you jump on it
  gameWrap.ground.body.immovable = true;

  //  Now let's create two ledges
  gameWrap.ledge = gameWrap.platforms.create(400, 400, 'ground');

  gameWrap.ledge.body.immovable = true;

  gameWrap.ledge = gameWrap.platforms.create(-150, 250, 'ground');

  gameWrap.ledge.body.immovable = true;


  gameWrap.cursors = gameWrap.game.input.keyboard.createCursorKeys();

  addPlayer(gameWrap);

};

export default create;
