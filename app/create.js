const create = (gameWrap) => () => {

  //  We're going to be using physics, so enable the Arcade Physics system
  gameWrap.game.physics.startSystem(gameWrap.Phaser.Physics.ARCADE);

  //  A simple background for our game
  gameWrap.game.add.sprite(0, 0, 'sky');

  //  The platforms group contains the ground and the 2 ledges we can jump on
  let platforms = gameWrap.game.add.group();

  //  We will enable physics for any object that is created in this group
  platforms.enableBody = true;

  // Here we create the ground.
  let ground = platforms.create(0, gameWrap.game.world.height - 64, 'ground');

  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  ground.scale.setTo(2, 2);

  //  This stops it from falling away when you jump on it
  ground.body.immovable = true;

  //  Now let's create two ledges
  var ledge = platforms.create(400, 400, 'ground');

  ledge.body.immovable = true;

  ledge = platforms.create(-150, 250, 'ground');

  ledge.body.immovable = true;


};

export default create;
