const skyImg = require('../assets/sky.png');
const starImg = require('../assets/star.png');
const platformImg = require('../assets/platform.png');
const dudeImg = require('../assets/characters/dude.png');
const baddieImg = require('../assets/characters/baddie.png');
const slugImg = require('../assets/characters/slug.png');
// http://www.characterdesignpage.com/blog/justice-league-task-force-sprites
// const origImg = require('./assets/characters/orig.png');

import ArcadePhysic from '../physics/ARCADE';
import Sky from '../objects/Sky';
import Platforms from '../objects/Platforms';
import Player from '../objects/PlayerDude';
import Stars from '../objects/Stars';
import ScoreText from '../objects/ScoreText';
import Baddie from '../objects/Baddie';
import Slub from '../objects/Slug';

import Core from '../Core';


class Level1 {

  preload() {
    this.load.image('sky', skyImg);
    this.load.image('star', starImg);
    this.load.image('ground', platformImg);
    this.load.spritesheet('baddie', baddieImg, 32, 32);
    this.load.spritesheet('dude', dudeImg, 32, 48);
    this.load.spritesheet('slug', slugImg, 48, 47, 48);

    this.objects = {};
  }

  create() {
    this.core = new Core(this);

    this.game.world.setBounds(0, 0, 1000, 1000);

    this.objects.arcadePhysic = new ArcadePhysic(this);
    this.objects.arcadePhysic.startSystem();

    this.objects.sky = new Sky(this);
    this.objects.sky.add();

    this.objects.platforms = new Platforms(this);
    this.objects.platforms.addGround();
    this.objects.platforms.addLedges();

    this.objects.player = new Player(this);
    this.objects.player.add();
    this.camera.follow(this.objects.player.object);

    this.objects.stars = new Stars(this);
    this.objects.stars.addStars();

    this.objects.scoreText = new ScoreText(this);
    this.objects.scoreText.add();

    this.objects.baddie = new Baddie(this.game);
    this.objects.baddie.add();
    this.objects.baddie.moveLeft();

    this.objects.slub = new Slub(this.game);
    this.objects.slub.add();
    this.objects.slub.moveLeft();
  }

  update() {
    this.physics.arcade.collide(this.objects.player.object, this.objects.platforms.group);
    this.physics.arcade.collide(this.objects.stars.group, this.objects.platforms.group);
    this.physics.arcade.collide(this.objects.baddie.object, this.objects.platforms.group);
    this.physics.arcade.collide(this.objects.slub.object, this.objects.platforms.group);

    this.physics.arcade.overlap(this.objects.player.object, this.objects.stars.group, this.core.playerCollideToStar, null, this);

    this.objects.player.initControl();

    this.objects.baddie.initAI();
    this.objects.slub.initAI();
  }

  render() {

  }

}

export default Level1;
