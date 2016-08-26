import Phaser from '../Phaser'


class Text extends Phaser.Text {

	constructor(game, x, y, text, ) {
		super(game, x, y, text, { font: "13px Arial", fill: "#000", align: "center" });
		
		this.game.stage.addChild(this);
	}

}

export default Text;
