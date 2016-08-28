class Platforms {

  constructor(game) {
    this.game = game;
    this.group = game.add.group();
    this.group.enableBody = true;
    this.ground;
    this.ledges = [];
  }

  addGround() {
    if (this.ground !== undefined) {
      console.warn('Ground had added');;
      return false;
    }
    this.ground = this.group.create(0, this.game.world.height - 64, 'ground');
    this.ground.scale.setTo(2.5, 2);
    this.ground.body.immovable = true;
  }

  addLedges() {
    this.ledges.push(this.group.create(600, 800, 'ground'));
    this.ledges[0].body.immovable = true;

    this.ledges.push(this.group.create(0, 650, 'ground'));
    this.ledges[1].body.immovable = true;

    /* left border */
    this.ledges.push(this.group.create(-65, 0, 'ground'));
    this.ledges[2].body.immovable = true;
    this.ledges[2].scale.setTo(0.2, 500);

    /* right border */
    this.ledges.push(this.group.create(this.game.world.width - 15, 0, 'ground'));
    this.ledges[3].body.immovable = true;
    this.ledges[3].scale.setTo(0.2, 500);
  }

}

export default Platforms;
