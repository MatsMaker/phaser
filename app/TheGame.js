import Phaser from './Phaser';

import Boot from './states/Boot';
import Preloader from './states/Preloader';
import MainMenu from './states/MainMenu';
import Level1 from './states/Level1';


class TheGame {

  constructor() {
    this._game = new Phaser.Game(800, 600, Phaser.CONVAS, '');
  }

  start() {
    this._game.state.add('Boot', Boot);
    this._game.state.add('Preloader', Preloader);
    this._game.state.add('MainMenu', MainMenu);
    this._game.state.add('Level1', Level1);

    this._game.state.start('Boot');
  }

}

export default TheGame;
