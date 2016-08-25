export default (gameWrap) => {
  //  We're going to be using physics, so enable the Arcade Physics system
  gameWrap.game.physics.startSystem(gameWrap.Phaser.Physics.ARCADE);
}
