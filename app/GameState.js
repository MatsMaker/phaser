import Phaser from './Phaser';


const skyImg = require('./assets/sky.png');
const starImg = require('./assets/star.png');
const platformImg = require('./assets/platform.png');
const dudeImg = require('./assets/characters/dude.png');
const baddieImg = require('./assets/characters/baddie.png');
const slugImg = require('./assets/characters/slug.png');
// http://www.characterdesignpage.com/blog/justice-league-task-force-sprites
// const origImg = require('./assets/characters/orig.png');

import ArcadePhysic from './physics/ARCADE';
import Sky from './objects/Sky';
import Platforms from './objects/Platforms';
import Player from './objects/PlayerDude';
import Stars from './objects/Stars';
import ScoreText from './objects/ScoreText';
import Baddie from './objects/Baddie';
import Slub from './objects/Slug';

import Core from './Core';


class GameState extends Phaser.State {

  preload() {
    this.game.load.image('sky', skyImg);
    this.game.load.image('star', starImg);
    this.game.load.image('ground', platformImg);
    this.game.load.spritesheet('baddie', baddieImg, 32, 32);
    this.game.load.spritesheet('dude', dudeImg, 32, 48);
    // this.game.load.spritesheet('orig', origImg, 62, 84);
    this.game.load.spritesheet('slug', slugImg, 48, 47, 48);
  }

  create() {
    this.core = new Core(this.game);
    let objects = this.game.objects;

    this.game.world.setBounds(0, 0, 1000, 1000);

    objects.arcadePhysic = new ArcadePhysic(this.game);
    objects.arcadePhysic.startSystem();

    objects.sky = new Sky(this.game);
    objects.sky.add();

    objects.platforms = new Platforms(this.game);
    objects.platforms.addGround();
    objects.platforms.addLedges();

    objects.player = new Player(this.game);
    objects.player.add();
    this.game.camera.follow(objects.player.object);

    objects.stars = new Stars(this.game);
    objects.stars.addStars();

    objects.scoreText = new ScoreText(this.game);
    objects.scoreText.add();

    objects.baddie = new Baddie(this.game);
    objects.baddie.add();
    objects.baddie.moveLeft();

    objects.slub = new Slub(this.game);
    objects.slub.add();
    objects.slub.moveLeft();
  }

  update() {
    let objects = this.game.objects;

    this.game.physics.arcade.collide(objects.player.object, objects.platforms.group);
    this.game.physics.arcade.collide(objects.stars.group, objects.platforms.group);
    this.game.physics.arcade.collide(objects.baddie.object, objects.platforms.group);
    this.game.physics.arcade.collide(objects.slub.object, objects.platforms.group);

    this.game.physics.arcade.overlap(objects.player.object, objects.stars.group, this.core.playerCollideToStar, null, this);

    objects.player.initControl();

    objects.baddie.initAI();
    objects.slub.initAI();
  }

  render() {

  }

}

export default GameState;
