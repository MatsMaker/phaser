class Map {

  constructor(game){
    this._game = game;
  }

  preload() {
    this._game.load.tilemap('map', require('file!../assets/titleMaps/map.csv'));
    this._game.load.image('tileset', require('../assets/titleMaps/tile_atlas(32*32).png'));
  }

  create() {
    this._game.objects.map = this._game.add.tilemap('map', 32, 32);
    this._game.objects.map.enableBody = true;
    this._game.objects.map.addTilesetImage('tileset');
    this._game.objects.map.setCollisionBetween(0, 100);

    this._game.objects.layer = this._game.objects.map.createLayer(0);
    this._game.objects.layer.resizeWorld();
  }

}

export default Map;
