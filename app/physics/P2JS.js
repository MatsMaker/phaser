export function startSystem(gameWrap) {
  gameWrap.game.physics.startSystem(gameWrap.Phaser.Physics.P2JS);
}

export function enable(gameWrap) {
  return gameWrap.game.physics.p2.enable;
}

export default {
  startSystem,
  enable
}
