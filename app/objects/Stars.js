class Stars {

  constructor(game) {
    this.game = game;
    this.group = game.add.group();
    this.group.enableBody = true;
    this.list = [];
  }

  addStars() {
    let stars = this.group;
    for (let i = 0; i < 12; i++) {
      //  Create a star inside of the 'stars' group
      this.list.push(stars.create(i * 70, 0, 'star'));
      //  Let gravity do its thing
      this.list[i].body.gravity.y = 96;
      //  This just gives each star a slightly random bounce value
      this.list[i].body.bounce.y = 0.7 + Math.random() * 0.2;
    }
  }

}

export default Stars;
