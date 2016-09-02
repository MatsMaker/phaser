class Firstaid {

  constructor(game) {
    this._game = game;
  }

  preload() {
    this._game.load.image('firstaid', require('../assets/firstaid.png'));
  }

  create() {
    this._game.objects.firstaid = this._game.add.sprite(164, 256, 'firstaid');

    this._game.physics.arcade.enable(this._game.objects.firstaid);
    // this._game.physics.p2.enable(this._game.objects.firstaid);

    // this._game.pbjects.firstaid.dirty = 100;
    this._game.objects.firstaid.body.mass = 1000;
    // this._game.objects.firstaid.body.bounce.y = 0.08;
    this._game.objects.firstaid.body.gravity.y = 1000;
    // this._game.objects.firstaid.body.damping = 0.9;
    this._game.objects.firstaid.body.drag.x = 200;
    this._game.objects.firstaid.body.drag.y = 100;
  }

}

export default Firstaid;
