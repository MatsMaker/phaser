export function startSystem(gameWrap) {
  gameWrap.game.physics.startSystem(gameWrap.Phaser.Physics.ARCADE);
}

export function enable(gameWrap, object) {
  gameWrap.game.physics.arcade.enable(object);
}

export default {
  startSystem,
  enable
}
