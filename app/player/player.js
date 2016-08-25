export function addPlayer(gameWrap) {
  // The player and its settings
  gameWrap.player = gameWrap.game.add.sprite(32, gameWrap.game.world.height - 150, 'dude');

  //  We need to enable physics on the player
  gameWrap.game.physics.arcade.enable(gameWrap.player);

  //  Player physics properties. Give the little guy a slight bounce.
  gameWrap.player.body.bounce.y = 0.2;
  gameWrap.player.body.gravity.y = 300;
  gameWrap.player.body.collideWorldBounds = true;

  //  Our two animations, walking left and right.
  gameWrap.player.animations.add('left', [0, 1, 2, 3], 10, true);
  gameWrap.player.animations.add('right', [5, 6, 7, 8], 10, true);
}

export function initControl(gameWrap) {

  //  Reset the players velocity (movement)
  gameWrap.player.body.velocity.x = 0;

  if (gameWrap.cursors.left.isDown) {
    //  Move to the left
    gameWrap.player.body.velocity.x = -150;

    gameWrap.player.animations.play('left');
  } else if (gameWrap.cursors.right.isDown) {
    //  Move to the right
    gameWrap.player.body.velocity.x = 150;

    gameWrap.player.animations.play('right');
  } else {
    //  Stand still
    gameWrap.player.animations.stop();

    gameWrap.player.frame = 4;
  }

  //  Allow the player to jump if they are touching the ground.
  if (gameWrap.cursors.up.isDown && gameWrap.player.body.touching.down) {
    gameWrap.player.body.velocity.y = -350;
  }
}


export default {
  addPlayer,
  initControl
}
