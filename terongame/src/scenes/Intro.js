
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

		// text
		const text = this.add.text(0, 200, "", {});
		text.text = "It's just another day in Black Temple... your raid is fighting Teron Gorefiend again and again and just keeps on wiping.\n\nIt's the eleventh try for today... finally you are the one who gets the Shadow of Death debuff! Now it's up to you to prevent the deadly constructs from wiping your raid!\n\nUse the W,A,S,D or arrow keys to move your avatar, or click/touch and hold. As soon as you die, the petbar comes in providing the necessary skills to deal with the constructs. Click them or use the respective number keys. Similar to the real game, you can use the TAB key to select the constructs or just click them.\n\nGood luck!";
		text.setStyle({"align":"center","fixedWidth":600,"fontSize":"15.5px","stroke":"#000000ff"});
		text.setLineSpacing(3);
		text.setWordWrapWidth(550);

		// text_1
		const text_1 = this.add.text(0, 756, "", {});
		text_1.text = "© 2021 | Faldorn | teron.faldorn.net | Valhalla, Arugal-US";
		text_1.setStyle({"align":"center","fixedWidth":600,"fontSize":"15.5px"});

		// text_1_1
		const text_1_1 = this.add.text(0, 776, "", {});
		text_1_1.text = "*** Used graphics and sounds are property of Blizzard Entertainment ***";
		text_1_1.setStyle({"align":"center","fixedWidth":600,"fontSize":"13px"});

		// startButton
		const startButton = this.add.image(428, 583, "buttons", 2);
		startButton.scaleX = 0.25;
		startButton.scaleY = 0.25;

		// startText
		const startText = this.add.text(328, 559, "", {});
		startText.text = "START";
		startText.setStyle({"align":"center","color":"#ff000000","fixedWidth":200,"fontSize":"42px","strokeThickness":3});

		// soundToggle
		const soundToggle = new SoundToggle(this, 544, 34);
		this.add.existing(soundToggle);

		// azertyButton
		const azertyButton = this.add.image(100, 688, "buttons", 3);
		azertyButton.scaleX = 0.15;
		azertyButton.scaleY = 0.15;

		// qwertyButton
		const qwertyButton = this.add.image(100, 644, "buttons", 3);
		qwertyButton.scaleX = 0.15;
		qwertyButton.scaleY = 0.15;

		// startText_1
		const startText_1 = this.add.text(68, 632, "", {});
		startText_1.text = "QWERTY";
		startText_1.setStyle({"align":"center","color":"#000000ff","fixedWidth":85,"fontSize":"20px","stroke":"#000000ff","strokeThickness":1});

		// startText_1_1
		const startText_1_1 = this.add.text(68, 676, "", {});
		startText_1_1.text = "AZERTY";
		startText_1_1.setStyle({"align":"center","color":"#000000ff","fixedWidth":85,"fontSize":"20px","stroke":"#000000ff","strokeThickness":1});

		// tick_azerty
		const tick_azerty = this.add.image(62, 685, "check");
		tick_azerty.scaleX = 0.33;
		tick_azerty.scaleY = 0.33;
		tick_azerty.visible = false;

		// tick_qwerty
		const tick_qwerty = this.add.image(62, 641, "check");
		tick_qwerty.scaleX = 0.33;
		tick_qwerty.scaleY = 0.33;

		// text_2
		const text_2 = this.add.text(0, 128, "", {});
		text_2.text = "Teron";
		text_2.setStyle({"align":"center","fixedWidth":600,"fontSize":"48px","strokeThickness":2});

		this.startButton = startButton;
		this.startText = startText;
		this.azertyButton = azertyButton;
		this.qwertyButton = qwertyButton;
		this.startText_1 = startText_1;
		this.startText_1_1 = startText_1_1;
		this.tick_azerty = tick_azerty;
		this.tick_qwerty = tick_qwerty;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	startButton;
	/** @type {Phaser.GameObjects.Text} */
	startText;
	/** @type {Phaser.GameObjects.Image} */
	azertyButton;
	/** @type {Phaser.GameObjects.Image} */
	qwertyButton;
	/** @type {Phaser.GameObjects.Text} */
	startText_1;
	/** @type {Phaser.GameObjects.Text} */
	startText_1_1;
	/** @type {Phaser.GameObjects.Image} */
	tick_azerty;
	/** @type {Phaser.GameObjects.Image} */
	tick_qwerty;

	/* START-USER-CODE */

	// Write your code here

	introSpeech;
	blackTempleAmbience;

	qwertyEnabled = true;

	create() {

		this.editorCreate();

		this.initSounds();
		this.initClickHandlers();

		this.introSpeech.play();
		this.blackTempleAmbience.play({
			loop: true,
			volume: 0.5
		});

	}

	update() {
		this.tick_qwerty.visible = this.qwertyEnabled;
		this.tick_azerty.visible = !this.qwertyEnabled;
	}

	initClickHandlers(){

		var localScene = this;

		// Start Button
		this.startButton.setInteractive();
		var localIntroSpeech = this.introSpeech;

		this.startButton.on('pointerdown', function (pointer) {
			if(localIntroSpeech.isPlaying) {
				localIntroSpeech.stop();
			}
			localScene.scene.start("TeronGame", { qwertyEnabled: localScene.qwertyEnabled });
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


		// QWERTY Button		
		this.qwertyButton.setInteractive();
		this.qwertyButton.on('pointerdown', function (pointer) {
			localScene.qwertyEnabled = true;
		});

		// AZERTY Button
		this.azertyButton.setInteractive();
		this.azertyButton.on('pointerdown', function (pointer) {
			localScene.qwertyEnabled = false;
		});


	}

	initSounds(){
		this.introSpeech = this.sound.add('teron_Intro');
		this.blackTempleAmbience = this.sound.add('blackTempleAmbience');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
