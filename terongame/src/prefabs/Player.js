
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 306, y ?? 177, texture || "balls", frame ?? 0);

		this.tintTopLeft = 16680068;
		this.tintTopRight = 16680068;
		this.tintBottomLeft = 16680068;
		this.tintBottomRight = 16680068;

		// this (components)
		new Physics(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	changeToGhost() {
		this.setFrame(2);
		this.tintTopLeft = 15767551;
		this.tintTopRight = 15767551;
		this.tintBottomLeft = 15767551;
		this.tintBottomRight = 15767551;
	}
	
	stopMoving() {
		this.body.setVelocityX(0);
		this.body.setVelocityY(0);
	}

	movePlayer(wasd) {
		var playerMoveSpeed = 90;

		if (wasd.left.isDown) {
			this.body.setVelocityX(-playerMoveSpeed);
		}
		else if (wasd.right.isDown) {
			this.body.setVelocityX(playerMoveSpeed);
		}
		else {
			this.body.setVelocityX(0);
		}

		if (wasd.down.isDown) {
			this.body.setVelocityY(playerMoveSpeed);
		}
		else if (wasd.up.isDown) {
			this.body.setVelocityY(-playerMoveSpeed);
		}
		else {
			this.body.setVelocityY(0);
		}	
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
