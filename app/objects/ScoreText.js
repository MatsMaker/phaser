import Phaser from '../Phaser';

class ScoreText {

  constructor(game) {
    this.game = game;
    this.score = 0;
    this.message = 'Score: ';
    this.object;
  }

  getMessage() {
    return this.message + this.score;
  }

  add() {
    this.object = this.game.add.text(16, 16, this.getMessage(), {
      fontSize: '18px',
      fill: '#000'
    });
  }

  increment() {
    this.score += 1;
    this.object.text = this.getMessage();
  }

}

export default ScoreText;
