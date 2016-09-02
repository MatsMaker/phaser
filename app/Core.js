class Core {

  constructor(game) {
    this.game = game;
  }

  playerCollideToStar(player, star) {
    star.kill();
    this.objects.scoreText.increment();
  }

  playerCollideHandleFirstaid(e, data, d) {
    console.warn(e, data, d);
  }

}

export default Core;
