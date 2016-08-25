require('./styles/main.scss');

import GameWrap from './GameWrap';
import preload from './preload';
import create from './create';
import update from './update';


const gameWrap = new GameWrap();

gameWrap.initGame([800,
  600,
  gameWrap.Phaser.AUTO,
  '', {
    preload: preload(gameWrap),
    create: create(gameWrap),
    update: update(gameWrap)
  }
]);
