
// You can write more code here

/* START OF COMPILED CODE */

class WinOverlay extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 300, y ?? 260);

		// rectangle
		const rectangle = scene.add.rectangle(0, 140, 600, 800);
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		rectangle.fillAlpha = 0.4;
		this.add(rectangle);

		// text
		const text = scene.add.text(-300, 72, "", {});
		text.text = "All constructs defeated!\n\nYour raid members cheer at you!\nYou saved their day!";
		text.setStyle({"align":"center","color":"#333afbff","fixedWidth":600,"fontSize":"28px","fontStyle":"bold","stroke":"#000000ff","strokeThickness":5,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color":"#000000ff"});
		text.setLineSpacing(5);
		this.add(text);

		// startButton
		const startButton = scene.add.image(78, 362, "buttons", 1);
		startButton.scaleX = 0.42;
		startButton.scaleY = 0.33;
		this.add(startButton);

		// startText
		const startText = scene.add.text(-82, 338, "", {});
		startText.text = "PLAY AGAIN";
		startText.setStyle({"align":"center","color":"#ff000000","fixedWidth":320,"fontSize":"42px","strokeThickness":3});
		this.add(startText);

		this.startButton = startButton;
		this.startText = startText;

		/* START-USER-CTR-CODE */

		// Start Button
		this.startButton.setInteractive();

		this.startButton.on('pointerover', function (pointer) {
			startText.tintTopLeft = 16181535; // Yellow
			startText.tintTopRight = 16181535;
			startText.tintBottomLeft = 16181535;
			startText.tintBottomRight = 16181535;
		});

		this.startButton.on('pointerout', function (pointer) {
			startText.tintTopLeft = 16777215; // White
			startText.tintTopRight = 16777215;
			startText.tintBottomLeft = 16777215;
			startText.tintBottomRight = 16777215;
		});

		this.startButton.on('pointerdown', function(pointer) {
			scene.scene.start("TeronGame");
		});

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	startButton;
	/** @type {Phaser.GameObjects.Text} */
	startText;

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
