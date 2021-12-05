
// You can write more code here

/* START OF COMPILED CODE */

class Intro extends Phaser.Scene {

	constructor() {
		super("Intro");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(300, 400, "background");

		// rectangle
		const rectangle = this.add.rectangle(300, 400, 600, 800);
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		rectangle.fillAlpha = 0.7;

		// startButton
		const startButton = this.add.ellipse(428, 580, 192, 64);
		startButton.isFilled = true;
		startButton.fillColor = 2880534;
		startButton.fillAlpha = 0.5;

		// text
		const text = this.add.text(32, 144, "", {});
		text.text = "It's just another day in Black Template... your raid is\nfighting Teron Gorefiend again and again and just keeps on\nwiping.\n\nIt's the eleventh try for today... finally you are the one\nwho gets the Shadow of Death debuff! Now it's up to you to\nprevent the deadly constructs from wiping your raid!\n\nUse the W,A,S,D keys to move your avatar, or click/touch\nand hold. As soon as you die, the petbar comes in\nproviding the necessary skills to deal with the constructs.\nClick them or use the respective number keys. Similar to\nthe real game, you can use the TAB key to select the\nconstructs or just click them.\n\nGood luck!";
		text.setStyle({"fontSize":"15.5px","stroke":"#000000ff"});
		text.setLineSpacing(3);

		// text_1
		const text_1 = this.add.text(24, 756, "", {});
		text_1.text = "© 2021 | Faldorn | teron.faldorn.net | Valhalla, Arugal-US";
		text_1.setStyle({"fontSize":"15.5px"});

		// text_1_1
		const text_1_1 = this.add.text(24, 776, "", {});
		text_1_1.text = "*** Used graphics and sounds are property of Blizzard Entertainment ***";
		text_1_1.setStyle({"fontSize":"13px"});

		// startText
		const startText = this.add.text(352, 556, "", {});
		startText.text = "START";
		startText.setStyle({"color":"#ff000000","fontSize":"48px","strokeThickness":3});

		// soundToggle
		const soundToggle = new SoundToggle(this, 544, 34);
		this.add.existing(soundToggle);

		this.startButton = startButton;
		this.startText = startText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Ellipse} */
	startButton;
	/** @type {Phaser.GameObjects.Text} */
	startText;

	/* START-USER-CODE */

	// Write your code here

	introSpeech;

	create() {

		this.editorCreate();

		this.initSounds();
		this.initClickHandlers();

		this.introSpeech.play();
	}

	initClickHandlers(){

		// Start Button
		this.startButton.setInteractive();

		var localScene = this;
		var localIntroSpeech = this.introSpeech;

		this.startButton.on('pointerdown', function (pointer) {
			if(localIntroSpeech.isPlaying) {
				localIntroSpeech.stop();
			}			
			localScene.scene.start("TeronGame");
		});

		var localStartText = this.startText;
		this.startButton.on('pointerover', function (pointer) {
			localStartText.tintTopLeft = 16181535; // Yellow
			localStartText.tintTopRight = 16181535;
			localStartText.tintBottomLeft = 16181535;
			localStartText.tintBottomRight = 16181535;
		});

		this.startButton.on('pointerout', function (pointer) {
			localStartText.tintTopLeft = 16777215; // White
			localStartText.tintTopRight = 16777215;
			localStartText.tintBottomLeft = 16777215;
			localStartText.tintBottomRight = 16777215;
		});



	}

	initSounds(){
		this.introSpeech = this.sound.add('teron_Intro');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
