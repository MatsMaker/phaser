class Slug {

  constructor(game) {
    this.game = game;
    this.object;
  }


  add() {
    this.object = this.game.add.sprite(this.game.world.width / 2 - 96, this.game.world.height - 350, 'slug');

    //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.object);

    //  Player physics properties. Give the little guy a slight bounce.
    this.object.body.bounce.y = 0.08;
    this.object.body.gravity.y = 300;
    this.object.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    this.object.animations.add('left', [4, 5, 6, 7], 10, true);
    this.object.animations.add('right', [8, 9, 10, 11], 10, true);
  }

  moveLeft() {
    this.object.body.velocity.x = -30;
    this.object.animations.play('left');
  }

  moveRight() {
    this.object.body.velocity.x = 30;
    this.object.animations.play('right');
  }

  initAI() {

    if (this.object.body.blocked.left) {
      this.moveRight();
    }

    if (this.object.body.blocked.right) {
      this.moveLeft();
    }
  }

}

export default Slug;
