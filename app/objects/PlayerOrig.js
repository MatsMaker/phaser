class PlayerElf {

  constructor(game) {
    this.game = game;
    this.object;
  }


  add() {
    this.object = this.game.add.sprite(32, this.game.world.height - 150, 'orig');
    this.object.scale.set(1);

    //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.object);

    //  Player physics properties. Give the little guy a slight bounce.
    this.object.body.bounce.y = 0.08;
    this.object.body.gravity.y = 300;
    this.object.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    this.object.animations.add('left', [7, 8, 9, 10], 10, true);
    this.object.animations.add('right', [20, 21, 22, 23], 10, true);
  }

  initControl() {
    let cursors = this.game.input.keyboard.createCursorKeys();
    this.object.body.velocity.x = 0;

    if (cursors.left.isDown) {
      this.object.body.velocity.x = -150;
      this.object.animations.play('left');

    } else if (cursors.right.isDown) {
      //  Move to the right
      this.object.body.velocity.x = 150;
      this.object.animations.play('right');
    } else {
      //  Stand still
      this.object.animations.stop();
      this.object.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && this.object.body.touching.down) {
      this.object.body.velocity.y = -250;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.down.isDown &&
      !this.object.body.touching.down &&
      this.object.body.velocity.y < 0) {
      this.object.body.velocity.y = 0;
    }
  }

}

export default PlayerElf;
