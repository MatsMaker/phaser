require('p2');
require('pixi.js');
const Phaser = require('phaser');

let game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});

function preload() {}

function create() {}

function update() {}
