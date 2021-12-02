
// You can write more code here

/* START OF COMPILED CODE */

class TeronGame extends Phaser.Scene {

	constructor() {
		super("TeronGame");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(300, 400, "background");

		// wall1
		const wall1 = this.add.rectangle(134, 782, 128, 40);

		// rectangle
		const rectangle = this.add.rectangle(39, 506, 50, 550);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(137, 243, 128, 128);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(216, 291, 32, 32);

		// rectangle_2_1
		const rectangle_2_1 = this.add.rectangle(216, 259, 32, 32);

		// rectangle_2_2
		const rectangle_2_2 = this.add.rectangle(197, 234, 32, 32);

		// rectangle_2_3
		const rectangle_2_3 = this.add.rectangle(194, 791, 32, 32);

		// rectangle_2_4
		const rectangle_2_4 = this.add.rectangle(406, 789, 32, 32);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(556, 523, 50, 550);

		// wall1_1
		const wall1_1 = this.add.rectangle(487, 784, 128, 40);

		// rectangle_1_1
		const rectangle_1_1 = this.add.rectangle(470, 243, 128, 128);

		// rectangle_2_1_1
		const rectangle_2_1_1 = this.add.rectangle(391, 291, 32, 32);

		// rectangle_2_1_2
		const rectangle_2_1_2 = this.add.rectangle(391, 260, 32, 32);

		// rectangle_2_1_3
		const rectangle_2_1_3 = this.add.rectangle(409, 238, 32, 32);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(470, 119, 128, 128);

		// rectangle_4_1
		const rectangle_4_1 = this.add.rectangle(137, 118, 128, 128);

		// rectangle_4_2
		const rectangle_4_2 = this.add.rectangle(299, 30, 256, 48);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(202, 57, 48, 48);

		// rectangle_5_1
		const rectangle_5_1 = this.add.rectangle(408, 61, 48, 48);

		// rectangle_2_2_1
		const rectangle_2_2_1 = this.add.rectangle(385, 53, 32, 32);

		// rectangle_2_2_2
		const rectangle_2_2_2 = this.add.rectangle(413, 82, 32, 32);

		// rectangle_2_2_3
		const rectangle_2_2_3 = this.add.rectangle(230, 49, 32, 32);

		// rectangle_2_2_4
		const rectangle_2_2_4 = this.add.rectangle(191, 222, 32, 32);

		// rectangle_2_2_5
		const rectangle_2_2_5 = this.add.rectangle(207, 252, 32, 32);

		// rectangle_2_2_4_1
		const rectangle_2_2_4_1 = this.add.rectangle(199, 78, 32, 32);

		// rectangle_2_2_4_2
		const rectangle_2_2_4_2 = this.add.rectangle(367, 44, 32, 32);

		// rectangle_2_2_4_3
		const rectangle_2_2_4_3 = this.add.rectangle(402, 250, 32, 32);

		// rectangle_2_2_4_4
		const rectangle_2_2_4_4 = this.add.rectangle(415, 229, 32, 32);

		// rectangle_2_2_3_1
		const rectangle_2_2_3_1 = this.add.rectangle(189, 783, 32, 32);

		// rectangle_2_2_3_2
		const rectangle_2_2_3_2 = this.add.rectangle(201, 803, 32, 32);

		// rectangle_2_2_3_3
		const rectangle_2_2_3_3 = this.add.rectangle(389, 809, 32, 32);

		// rectangle_2_2_3_4
		const rectangle_2_2_3_4 = this.add.rectangle(396, 800, 32, 32);

		// rectangle_2_2_3_5
		const rectangle_2_2_3_5 = this.add.rectangle(402, 794, 32, 32);

		// rectangle_2_2_3_6
		const rectangle_2_2_3_6 = this.add.rectangle(415, 783, 32, 32);

		// rectangle_2_2_3_7
		const rectangle_2_2_3_7 = this.add.rectangle(186, 209, 32, 32);

		// rectangle_2_2_3_8
		const rectangle_2_2_3_8 = this.add.rectangle(394, 62, 32, 32);

		// rectangle_2_2_3_9
		const rectangle_2_2_3_9 = this.add.rectangle(379, 50, 32, 32);

		// rectangle_2_2_3_10
		const rectangle_2_2_3_10 = this.add.rectangle(408, 76, 32, 32);

		// rectangle_2_2_3_11
		const rectangle_2_2_3_11 = this.add.rectangle(419, 89, 32, 32);

		// rectangle_2_2_3_12
		const rectangle_2_2_3_12 = this.add.rectangle(245, 40, 32, 32);

		// rectangle_2_2_3_13
		const rectangle_2_2_3_13 = this.add.rectangle(220, 54, 32, 32);

		// rectangle_2_2_3_14
		const rectangle_2_2_3_14 = this.add.rectangle(191, 81, 32, 32);

		// rectangle_2_2_3_15
		const rectangle_2_2_3_15 = this.add.rectangle(64, 291, 32, 32);

		// rectangle_2_2_3_16
		const rectangle_2_2_3_16 = this.add.rectangle(61, 780, 32, 32);

		// rectangle_2_2_3_17
		const rectangle_2_2_3_17 = this.add.rectangle(201, 290, 32, 32);

		// rectangle_2_2_3_7_1
		const rectangle_2_2_3_7_1 = this.add.rectangle(204, 245, 32, 32);

		// rectangle_2_2_3_7_2
		const rectangle_2_2_3_7_2 = this.add.rectangle(200, 241, 32, 32);

		// rectangle_2_2_3_7_3
		const rectangle_2_2_3_7_3 = this.add.rectangle(200, 237, 32, 32);

		// rectangle_2_2_3_7_4
		const rectangle_2_2_3_7_4 = this.add.rectangle(189, 217, 32, 32);

		// rectangle_2_2_3_7_5
		const rectangle_2_2_3_7_5 = this.add.rectangle(195, 227, 32, 32);

		// rectangle_2_2_3_7_6
		const rectangle_2_2_3_7_6 = this.add.rectangle(207, 248, 32, 32);

		// rectangle_2_2_3_7_7
		const rectangle_2_2_3_7_7 = this.add.rectangle(211, 252, 32, 32);

		// rectangle_2_2_3_7_8
		const rectangle_2_2_3_7_8 = this.add.rectangle(204, 241, 32, 32);

		// ellipse_1
		const ellipse_1 = this.add.ellipse(320, 185, 17, 17);
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 15851570;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(307, 121, 17, 17);
		ellipse_2.isFilled = true;
		ellipse_2.fillColor = 8475429;

		// ellipse_2_1
		const ellipse_2_1 = this.add.ellipse(345, 169, 17, 17);
		ellipse_2_1.isFilled = true;
		ellipse_2_1.fillColor = 8475429;

		// ellipse_2_1_1
		const ellipse_2_1_1 = this.add.ellipse(281, 188, 17, 17);
		ellipse_2_1_1.isFilled = true;
		ellipse_2_1_1.fillColor = 3090405;

		// ellipse_2_1_1_1
		const ellipse_2_1_1_1 = this.add.ellipse(391, 149, 17, 17);
		ellipse_2_1_1_1.isFilled = true;
		ellipse_2_1_1_1.fillColor = 3090405;

		// ellipse_2_1_1_2
		const ellipse_2_1_1_2 = this.add.ellipse(277, 171, 17, 17);
		ellipse_2_1_1_2.isFilled = true;
		ellipse_2_1_1_2.fillColor = 15883021;

		// ellipse_2_1_1_2_1
		const ellipse_2_1_1_2_1 = this.add.ellipse(273, 75, 17, 17);
		ellipse_2_1_1_2_1.isFilled = true;
		ellipse_2_1_1_2_1.fillColor = 15883021;

		// ellipse_1_1
		const ellipse_1_1 = this.add.ellipse(329, 171, 17, 17);
		ellipse_1_1.isFilled = true;
		ellipse_1_1.fillColor = 16081896;

		// ellipse_1_1_1
		const ellipse_1_1_1 = this.add.ellipse(391, 127, 17, 17);
		ellipse_1_1_1.isFilled = true;
		ellipse_1_1_1.fillColor = 16081896;

		// ellipse_1_1_2
		const ellipse_1_1_2 = this.add.ellipse(264, 183, 17, 17);
		ellipse_1_1_2.isFilled = true;
		ellipse_1_1_2.fillColor = 16081896;

		// ellipse_1_1_1_1
		const ellipse_1_1_1_1 = this.add.ellipse(223, 103, 17, 17);
		ellipse_1_1_1_1.isFilled = true;
		ellipse_1_1_1_1.fillColor = 4897530;

		// ellipse_1_1_1_1_1
		const ellipse_1_1_1_1_1 = this.add.ellipse(374, 98, 17, 17);
		ellipse_1_1_1_1_1.isFilled = true;
		ellipse_1_1_1_1_1.fillColor = 4897530;

		// ellipse_1_1_1_1_2
		const ellipse_1_1_1_1_2 = this.add.ellipse(241, 131, 17, 17);
		ellipse_1_1_1_1_2.isFilled = true;
		ellipse_1_1_1_1_2.fillColor = 10630128;

		// ellipse_1_1_1_1_2_1
		const ellipse_1_1_1_1_2_1 = this.add.ellipse(217, 163, 17, 17);
		ellipse_1_1_1_1_2_1.isFilled = true;
		ellipse_1_1_1_1_2_1.fillColor = 10630128;

		// ellipse_1_1_1_1_2_2
		const ellipse_1_1_1_1_2_2 = this.add.ellipse(353, 79, 17, 17);
		ellipse_1_1_1_1_2_2.isFilled = true;
		ellipse_1_1_1_1_2_2.fillColor = 10630128;

		// ellipse_1_1_1_1_2_3
		const ellipse_1_1_1_1_2_3 = this.add.ellipse(351, 112, 17, 17);
		ellipse_1_1_1_1_2_3.isFilled = true;
		ellipse_1_1_1_1_2_3.fillColor = 10630128;

		// ellipse_1_1_1_1_2_4
		const ellipse_1_1_1_1_2_4 = this.add.ellipse(218, 124, 17, 17);
		ellipse_1_1_1_1_2_4.isFilled = true;

		// ellipse_1_1_1_1_2_4_1
		const ellipse_1_1_1_1_2_4_1 = this.add.ellipse(331, 73, 17, 17);
		ellipse_1_1_1_1_2_4_1.isFilled = true;

		// ellipse_1_1_1_2
		const ellipse_1_1_1_2 = this.add.ellipse(245, 83, 17, 17);
		ellipse_1_1_1_2.isFilled = true;
		ellipse_1_1_1_2.fillColor = 4113452;

		// ellipse_1_1_1_2_1
		const ellipse_1_1_1_2_1 = this.add.ellipse(291, 67, 17, 17);
		ellipse_1_1_1_2_1.isFilled = true;
		ellipse_1_1_1_2_1.fillColor = 4113452;

		// ellipse_1_1_1_2_2
		const ellipse_1_1_1_2_2 = this.add.ellipse(244, 107, 17, 17);
		ellipse_1_1_1_2_2.isFilled = true;
		ellipse_1_1_1_2_2.fillColor = 4113452;

		// ellipse_2_1_1_1_1
		const ellipse_2_1_1_1_1 = this.add.ellipse(218, 144, 17, 17);
		ellipse_2_1_1_1_1.isFilled = true;
		ellipse_2_1_1_1_1.fillColor = 3090405;

		// ellipse_2_1_1_1_2
		const ellipse_2_1_1_1_2 = this.add.ellipse(311, 69, 17, 17);
		ellipse_2_1_1_1_2.isFilled = true;
		ellipse_2_1_1_1_2.fillColor = 3090405;

		// ellipse_2_1_1_3
		const ellipse_2_1_1_3 = this.add.ellipse(338, 184, 17, 17);
		ellipse_2_1_1_3.isFilled = true;
		ellipse_2_1_1_3.fillColor = 3090405;

		// ellipse_1_1_1_1_2_4_1_1
		const ellipse_1_1_1_1_2_4_1_1 = this.add.ellipse(391, 170, 17, 17);
		ellipse_1_1_1_1_2_4_1_1.isFilled = true;

		// debuff
		const debuff = new Debuff(this, 527, 163);
		this.add.existing(debuff);
		debuff.scaleX = 0.75;
		debuff.scaleY = 0.75;

		// ghost_4
		const ghost_4 = new Ghost(this, 355, 699);
		this.add.existing(ghost_4);

		// ghost_1
		const ghost_1 = new Ghost(this, 254, 696);
		this.add.existing(ghost_1);

		// ghost_2
		const ghost_2 = new Ghost(this, 287, 698);
		this.add.existing(ghost_2);

		// ghost_3
		const ghost_3 = new Ghost(this, 325, 700);
		this.add.existing(ghost_3);

		// player
		const player = new Player(this, 245, 152);
		this.add.existing(player);
		player.tintTopLeft = 16777215;
		player.tintTopRight = 16777215;
		player.tintBottomLeft = 16777215;
		player.tintBottomRight = 16777215;

		// loseText
		const loseText = this.add.text(106, 387, "", {});
		loseText.visible = false;
		loseText.tintTopLeft = 16580608;
		loseText.tintTopRight = 16580608;
		loseText.tintBottomLeft = 16580608;
		loseText.tintBottomRight = 16580608;
		loseText.text = "You lost!\n   LOL";
		loseText.setStyle({"fontSize":"72px","fontStyle":"bold"});

		// abilityBar
		const abilityBar = new AbilityBar(this, 193, 766);
		this.add.existing(abilityBar);
		abilityBar.scaleX = 0.66;
		abilityBar.scaleY = 0.66;
		abilityBar.visible = false;

		// targetFrame
		const targetFrame = new TargetFrame(this, 343, 239);
		this.add.existing(targetFrame);

		// winText
		const winText = this.add.text(68, 310, "", {});
		winText.visible = false;
		winText.tintTopLeft = 4121372;
		winText.tintTopRight = 4121372;
		winText.tintBottomLeft = 4121372;
		winText.tintBottomRight = 4121372;
		winText.text = "You did it!\n You won!";
		winText.setStyle({"fontSize":"72px","fontStyle":"bold"});

		// lists
		const walls = [rectangle_1, rectangle_2, rectangle_2_1, rectangle_2_2, rectangle, wall1, rectangle_2_3, rectangle_2_4, rectangle_3, rectangle_1_1, wall1_1, rectangle_2_1_1, rectangle_2_1_2, rectangle_2_1_3, rectangle_4, rectangle_4_1, rectangle_4_2, rectangle_5, rectangle_5_1, rectangle_2_2_1, rectangle_2_2_2, rectangle_2_2_3, rectangle_2_2_4, rectangle_2_2_5, rectangle_2_2_4_1, rectangle_2_2_4_2, rectangle_2_2_4_3, rectangle_2_2_4_4]
		const ghosts = [ghost_1, ghost_2, ghost_3, ghost_4]

		// wall1 (components)
		new PhysicsStatic(wall1);

		// rectangle (components)
		new PhysicsStatic(rectangle);

		// rectangle_1 (components)
		new PhysicsStatic(rectangle_1);

		// rectangle_2 (components)
		new PhysicsStatic(rectangle_2);

		// rectangle_2_1 (components)
		new PhysicsStatic(rectangle_2_1);

		// rectangle_2_2 (components)
		new PhysicsStatic(rectangle_2_2);

		// rectangle_2_3 (components)
		new PhysicsStatic(rectangle_2_3);

		// rectangle_2_4 (components)
		new PhysicsStatic(rectangle_2_4);

		// rectangle_3 (components)
		new PhysicsStatic(rectangle_3);

		// wall1_1 (components)
		new PhysicsStatic(wall1_1);

		// rectangle_1_1 (components)
		new PhysicsStatic(rectangle_1_1);

		// rectangle_2_1_1 (components)
		new PhysicsStatic(rectangle_2_1_1);

		// rectangle_2_1_2 (components)
		new PhysicsStatic(rectangle_2_1_2);

		// rectangle_2_1_3 (components)
		new PhysicsStatic(rectangle_2_1_3);

		// rectangle_4 (components)
		new PhysicsStatic(rectangle_4);

		// rectangle_4_1 (components)
		new PhysicsStatic(rectangle_4_1);

		// rectangle_4_2 (components)
		new PhysicsStatic(rectangle_4_2);

		// rectangle_5 (components)
		new PhysicsStatic(rectangle_5);

		// rectangle_5_1 (components)
		new PhysicsStatic(rectangle_5_1);

		// rectangle_2_2_1 (components)
		new PhysicsStatic(rectangle_2_2_1);

		// rectangle_2_2_2 (components)
		new PhysicsStatic(rectangle_2_2_2);

		// rectangle_2_2_3 (components)
		new PhysicsStatic(rectangle_2_2_3);

		// rectangle_2_2_4 (components)
		new PhysicsStatic(rectangle_2_2_4);

		// rectangle_2_2_5 (components)
		new PhysicsStatic(rectangle_2_2_5);

		// rectangle_2_2_4_1 (components)
		new PhysicsStatic(rectangle_2_2_4_1);

		// rectangle_2_2_4_2 (components)
		new PhysicsStatic(rectangle_2_2_4_2);

		// rectangle_2_2_4_3 (components)
		new PhysicsStatic(rectangle_2_2_4_3);

		// rectangle_2_2_4_4 (components)
		new PhysicsStatic(rectangle_2_2_4_4);

		// rectangle_2_2_3_1 (components)
		new PhysicsStatic(rectangle_2_2_3_1);

		// rectangle_2_2_3_2 (components)
		new PhysicsStatic(rectangle_2_2_3_2);

		// rectangle_2_2_3_3 (components)
		new PhysicsStatic(rectangle_2_2_3_3);

		// rectangle_2_2_3_4 (components)
		new PhysicsStatic(rectangle_2_2_3_4);

		// rectangle_2_2_3_5 (components)
		new PhysicsStatic(rectangle_2_2_3_5);

		// rectangle_2_2_3_6 (components)
		new PhysicsStatic(rectangle_2_2_3_6);

		// rectangle_2_2_3_7 (components)
		new PhysicsStatic(rectangle_2_2_3_7);

		// rectangle_2_2_3_8 (components)
		new PhysicsStatic(rectangle_2_2_3_8);

		// rectangle_2_2_3_9 (components)
		new PhysicsStatic(rectangle_2_2_3_9);

		// rectangle_2_2_3_10 (components)
		new PhysicsStatic(rectangle_2_2_3_10);

		// rectangle_2_2_3_11 (components)
		new PhysicsStatic(rectangle_2_2_3_11);

		// rectangle_2_2_3_12 (components)
		new PhysicsStatic(rectangle_2_2_3_12);

		// rectangle_2_2_3_13 (components)
		new PhysicsStatic(rectangle_2_2_3_13);

		// rectangle_2_2_3_14 (components)
		new PhysicsStatic(rectangle_2_2_3_14);

		// rectangle_2_2_3_15 (components)
		new PhysicsStatic(rectangle_2_2_3_15);

		// rectangle_2_2_3_16 (components)
		new PhysicsStatic(rectangle_2_2_3_16);

		// rectangle_2_2_3_17 (components)
		new PhysicsStatic(rectangle_2_2_3_17);

		// rectangle_2_2_3_7_1 (components)
		new PhysicsStatic(rectangle_2_2_3_7_1);

		// rectangle_2_2_3_7_2 (components)
		new PhysicsStatic(rectangle_2_2_3_7_2);

		// rectangle_2_2_3_7_3 (components)
		new PhysicsStatic(rectangle_2_2_3_7_3);

		// rectangle_2_2_3_7_4 (components)
		new PhysicsStatic(rectangle_2_2_3_7_4);

		// rectangle_2_2_3_7_5 (components)
		new PhysicsStatic(rectangle_2_2_3_7_5);

		// rectangle_2_2_3_7_6 (components)
		new PhysicsStatic(rectangle_2_2_3_7_6);

		// rectangle_2_2_3_7_7 (components)
		new PhysicsStatic(rectangle_2_2_3_7_7);

		// rectangle_2_2_3_7_8 (components)
		new PhysicsStatic(rectangle_2_2_3_7_8);

		// ghost_4 (components)
		const ghost_4Named = Named.getComponent(ghost_4);
		ghost_4Named.name = "Deadly Construct 4";

		// ghost_1 (components)
		const ghost_1Named = Named.getComponent(ghost_1);
		ghost_1Named.name = "Deadly Construct 1";

		// ghost_2 (components)
		const ghost_2Named = Named.getComponent(ghost_2);
		ghost_2Named.name = "Deadly Construct 2";

		// ghost_3 (components)
		const ghost_3Named = Named.getComponent(ghost_3);
		ghost_3Named.name = "Deadly Construct 3";

		this.debuff = debuff;
		this.ghost_4 = ghost_4;
		this.ghost_1 = ghost_1;
		this.ghost_2 = ghost_2;
		this.ghost_3 = ghost_3;
		this.player = player;
		this.loseText = loseText;
		this.abilityBar = abilityBar;
		this.targetFrame = targetFrame;
		this.winText = winText;
		this.walls = walls;
		this.ghosts = ghosts;

		this.events.emit("scene-awake");
	}

	/** @type {Debuff} */
	debuff;
	/** @type {Ghost} */
	ghost_4;
	/** @type {Ghost} */
	ghost_1;
	/** @type {Ghost} */
	ghost_2;
	/** @type {Ghost} */
	ghost_3;
	/** @type {Player} */
	player;
	/** @type {Phaser.GameObjects.Text} */
	loseText;
	/** @type {AbilityBar} */
	abilityBar;
	/** @type {TargetFrame} */
	targetFrame;
	/** @type {Phaser.GameObjects.Text} */
	winText;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	walls;
	/** @type {Ghost[]} */
	ghosts;

	/* START-USER-CODE */

	gameEnded = false;

	// Write your code here

	create() {
		this.editorCreate();
		this.bindKeys();
		this.initColliders();
		this.targetFrame.setTarget(null);
	}

	update() {
		if(this.gameEnded) {
			return;
		}

		this.player.movePlayer(this.wasd);

		if(this.debuff.visible)
		{
			this.debuff.update();

			if(!this.debuff.visible)
			{
				// The moment the debuff disappears, spawn in the ghosts
				this.spawnGhosts();
			}
		}
		
		this.handleTargetSelection();

		this.abilityBar.update(this.wasd, this.player, this.ghosts, this.targetFrame.target);

		this.targetFrame.update();

		this.ghosts.forEach(ghost => ghost.update());

		this.checkGameEnded();
	}

	initColliders() {
		this.physics.add.collider(this.player, this.walls);

		// May need ghost-ghost collision later if selecting/targeting is hard or unclear
		this.physics.add.collider(this.ghosts, this.ghosts);
	}

	bindKeys() {
		this.wasd = {
			up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W, true),
			left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A, true),
			down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S, true),
			right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D, true),			
			one: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE, true),
			three: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE, true),
			four: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR, true),
			five: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE, true),
			seven: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN, true),
			tab: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB, true)
		};
	}
	
	handleTargetSelection() {
		if (Phaser.Input.Keyboard.JustDown(this.wasd.tab)) {
			this.selectNextTarget();
		}
	}
	
	selectNextTarget() {
		var currentIndex = this.getCurrentTargetIndex(this.targetFrame.target);
		console.log("Current Index: " + currentIndex);
		var newIndex = this.getNextTargetIndex(currentIndex);
		console.log("New Index: " + newIndex);
		
		if(newIndex != -1 && this.ghosts[newIndex].visible) {
			this.targetFrame.setTarget(this.ghosts[newIndex]);
		} else {
			this.targetFrame.setTarget(null);
		}
	}
	
	getCurrentTargetIndex(currentTarget) {
		// Find current index, if exists
		for (var i = 0; i < this.ghosts.length; i++) {
			if(this.ghosts[i] === currentTarget) {
				return i;
			}
		}
		
		return -1;
	}
	
	getNextTargetIndex(currentIndex) {
		// Try 4 times to select next target, starting from current if it exists
		for(var j = 1; j <= 4; j++) {
			var tryIndex = (currentIndex + j) % 4;
			if(this.ghosts[tryIndex].alive) {
				return tryIndex;
			}
		}
		
		return -1;
	}

	spawnGhosts() {
		this.ghost_1.x = this.player.x - 20;
		this.ghost_1.y = this.player.y - 20;

		this.ghost_2.x = this.player.x + 20;
		this.ghost_2.y = this.player.y - 20;

		this.ghost_3.x = this.player.x - 20;
		this.ghost_3.y = this.player.y + 20;

		this.ghost_4.x = this.player.x + 20;
		this.ghost_4.y = this.player.y + 20;
		this.ghosts.forEach(ghost => ghost.visible = true);
		this.ghosts.forEach(ghost => ghost.spawnTime = new Date());

		this.abilityBar.visible = true;

		this.player.changeToGhost();
		
	}

	checkGameEnded() {
		if(this.ghosts.every(ghost => ghost.alive === false)) {
			this.winGame();
		} else {
			var bossLocation = new Phaser.Geom.Point(300, 150);

			if(this.ghosts.some(ghost => Phaser.Math.Distance.BetweenPoints(ghost, bossLocation) < 20)) {
				this.loseGame();
			}
		}
	}

	winGame() {
		this.winText.visible = true;
		this.gameEnded = true;
	}

	loseGame() {
		this.loseText.visible = true;
		this.gameEnded = true;
		this.stopGhosts();
	}

	stopGhosts() {
		this.ghosts.forEach(ghost => ghost.stopMoving());
		this.player.stopMoving();
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here