import Phaser from '../Phaser'
import BaseWeapon from '../weapons/Base'

class PlayerDude {

  constructor(game) {
    this.game = game;
    this.object;
  }

  add() {
    let pointY = this.game.world.height - 128;
    this.object = this.game.add.sprite(128, pointY, 'dude');

    let baseWeapon = new BaseWeapon(this.game);
    baseWeapon.create(this.object);
    this.righHend = baseWeapon;

    //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.object);
    //  Player physics properties. Give the little guy a slight bounce.
    this.object.body.bounce.y = 0.08;
    this.object.body.gravity.y = 300;
    this.object.body.collideWorldBounds = true;
    //  Our two animations, walking left and right.
    this.object.animations.add('left', [
      0, 1, 2, 3
    ], 10, true);
    this.object.animations.add('right', [
      5, 6, 7, 8
    ], 10, true);
    // this.object.body.onCollide = new Phaser.Signal();
    this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  }

  reset() {
    const self = this;
    return () => {
      let pointY = this.game.world.height - 128;
      this.object.reset(128, pointY);
    }
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
    if (cursors.up.isDown && this.object.body.blocked.down) {
      this.object.body.velocity.y = -350;
    }
    //  Allow the player to jump if they are touching the ground.
    if (cursors.down.isDown && !this.object.body.blocked.down && this.object.body.velocity.y < 0) {
      this.object.body.velocity.y = 0;
    }

    if (cursors.left.isDown) {
      this.righHend.isAimingTo('left');
    }
    if (cursors.right.isDown) {
      this.righHend.isAimingTo('right');
    }
    if (this.fireButton.isDown) {
      this.righHend.shot();
    }

  }

}

export default PlayerDude;
