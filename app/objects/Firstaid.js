class Firstaid {

  constructor(game) {
    this._game = game;
  }

  preload() {
    this._game.load.image('firstaid', require('../assets/firstaid.png'));
  }

  create() {
    this._game.objects.firstaid = this._game.add.sprite(164, 164, 'firstaid');
    this._game.physics.arcade.enable(this._game.objects.firstaid);

    this._game.objects.firstaid.body.bounce.y = 0.08;
    this._game.objects.firstaid.body.gravity.y = 800;
  }

}

export default Firstaid;
