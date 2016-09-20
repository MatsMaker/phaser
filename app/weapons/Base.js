import Phaser from '../Phaser'

class Base {

  constructor(game) {
    this.game = game;
    this.object;
    this.owner;
  }

  create(sprite) {
    this.owner = sprite;
    this.weapon = this.game.add.weapon(30, 'diamond');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 300;
    this.weapon.bulletAngleOffset = 270;
    this.weapon.fireRate = 1000;
    this.weapon.bulletGravity.y = 80;
    this.weapon.fireAngle = 0;
  }

  shot() {
    this.weapon.fireFrom.x = this.owner.x;
    this.weapon.fireFrom.y = this.owner.y;
    this.weapon.fire();
  }

  isAimingTo(direction) {
    if (direction == 'right') {
      this.weapon.fireAngle = 0;
    }
    if (direction == 'left') {
      this.weapon.fireAngle = 180;
    }
  }

  getWeapon() {
    return this.weapon;
  }

}

export default Base;
