class Core {

  constructor(game) {
    this.game = game;
  }

  playerCollideToStar(player, star) {
    star.kill();
    this.objects.scoreText.increment();
  }

}

export default Core;
