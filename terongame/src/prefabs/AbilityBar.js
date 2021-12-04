
// You can write more code here

/* START OF COMPILED CODE */

class AbilityBar extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 240, y ?? 160);

		// spell_spiritStrike
		const spell_spiritStrike = scene.add.image(-8, 24, "spell_spiritStrike");
		this.add(spell_spiritStrike);

		// spell_spiritLance
		const spell_spiritLance = scene.add.image(104, 24, "spell_spiritLance");
		this.add(spell_spiritLance);

		// spell_spiritChains
		const spell_spiritChains = scene.add.image(160, 24, "spell_spiritChains");
		this.add(spell_spiritChains);

		// spell_spiritVolley
		const spell_spiritVolley = scene.add.image(216, 24, "spell_spiritVolley");
		this.add(spell_spiritVolley);

		// spell_spiritShield
		const spell_spiritShield = scene.add.image(328, 24, "spell_spiritShield");
		this.add(spell_spiritShield);

		// abilityName
		const abilityName = scene.add.text(-288, 12, "", {});
		abilityName.visible = false;
		abilityName.text = "Ability Name";
		abilityName.setStyle({"fontSize":"24px","fontStyle":"bold"});
		this.add(abilityName);

		// text
		const text = scene.add.text(4, -4, "", {});
		text.text = "1";
		text.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text);

		// text_1
		const text_1 = scene.add.text(116, -4, "", {});
		text_1.text = "3";
		text_1.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_1);

		// text_2
		const text_2 = scene.add.text(172, -4, "", {});
		text_2.text = "4";
		text_2.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_2);

		// text_3
		const text_3 = scene.add.text(228, -4, "", {});
		text_3.text = "5";
		text_3.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_3);

		// text_4
		const text_4 = scene.add.text(340, -4, "", {});
		text_4.text = "7";
		text_4.setStyle({"backgroundColor":"","color":"#ffffffff","fontSize":"20px","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(text_4);

		// spiritVolley_cooldown
		const spiritVolley_cooldown = scene.add.text(188, 4, "", {});
		spiritVolley_cooldown.visible = false;
		spiritVolley_cooldown.text = "15";
		spiritVolley_cooldown.setStyle({"align":"center","color":"#ff0000ff","fixedWidth":56,"fontSize":"36px","fontStyle":"bold","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(spiritVolley_cooldown);

		// spiritChains_cooldown
		const spiritChains_cooldown = scene.add.text(132, 4, "", {});
		spiritChains_cooldown.visible = false;
		spiritChains_cooldown.text = "15";
		spiritChains_cooldown.setStyle({"align":"center","color":"#ff0000ff","fixedWidth":56,"fontSize":"36px","fontStyle":"bold","stroke":"#000000ff","strokeThickness":5,"shadow.fill":true});
		this.add(spiritChains_cooldown);

		// lists
		const spells = [spell_spiritStrike, spell_spiritLance, spell_spiritChains, spell_spiritVolley, spell_spiritShield]

		this.spell_spiritStrike = spell_spiritStrike;
		this.spell_spiritLance = spell_spiritLance;
		this.spell_spiritChains = spell_spiritChains;
		this.spell_spiritVolley = spell_spiritVolley;
		this.spell_spiritShield = spell_spiritShield;
		this.abilityName = abilityName;
		this.text_3 = text_3;
		this.spiritVolley_cooldown = spiritVolley_cooldown;
		this.spiritChains_cooldown = spiritChains_cooldown;
		this.spells = spells;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	spell_spiritStrike;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritLance;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritChains;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritVolley;
	/** @type {Phaser.GameObjects.Image} */
	spell_spiritShield;
	/** @type {Phaser.GameObjects.Text} */
	abilityName;
	/** @type {Phaser.GameObjects.Text} */
	text_3;
	/** @type {Phaser.GameObjects.Text} */
	spiritVolley_cooldown;
	/** @type {Phaser.GameObjects.Text} */
	spiritChains_cooldown;
	/** @type {Phaser.GameObjects.Image[]} */
	spells;

	/* START-USER-CODE */

	last_GCD_time = new Date() - 15000;
	last_spiritChains_time = new Date() - 15000;
	last_spiritVolley_time = new Date() - 15000;

	coolingColor = 4473924;
	readyColor = 16777215;
	
	inputKeys;
	player;
	ghosts;
	targetFrame;
	
	
	update() {
		if(!this.visible) {
			return;	
		}
		this.updateCooldowns();
		this.activateAbilities();
	}

	updateCooldowns() {

		var currentTime = new Date();
		var gcd = this.isGCD();

		if(gcd) {
			this.tintSpell(this.spell_spiritStrike, this.coolingColor);
			this.tintSpell(this.spell_spiritLance, this.coolingColor);
			this.tintSpell(this.spell_spiritShield, this.coolingColor);
		} else {
			this.tintSpell(this.spell_spiritStrike, this.readyColor);
			this.tintSpell(this.spell_spiritLance, this.readyColor);
			this.tintSpell(this.spell_spiritShield, this.readyColor);
		}

		var spiritChainsElapsed = currentTime - this.last_spiritChains_time;
		var spiritVolleyElapsed = currentTime - this.last_spiritVolley_time;
		
		var spiritChainsOnCooldown = (spiritChainsElapsed < 15000);
		var spiritVolleyOnCooldown = (spiritVolleyElapsed < 15000);

		if(gcd || spiritChainsOnCooldown) {
			this.tintSpell(this.spell_spiritChains, this.coolingColor);
			
			if(spiritChainsOnCooldown) {
				this.spiritChains_cooldown.visible = true;
				var remainingSeconds = Math.ceil((15000 - spiritChainsElapsed) / 1000);
				this.spiritChains_cooldown.setText(remainingSeconds);
			}
		} else {
			this.tintSpell(this.spell_spiritChains, this.readyColor);
			this.spiritChains_cooldown.visible = false;
		}

		if(gcd || spiritVolleyOnCooldown) {
			this.tintSpell(this.spell_spiritVolley, this.coolingColor);
			
			if(spiritVolleyOnCooldown) {
				this.spiritVolley_cooldown.visible = true;
				var remainingSeconds = Math.ceil((15000 - spiritVolleyElapsed) / 1000);
				this.spiritVolley_cooldown.setText(remainingSeconds);
			}
		} else {
			this.tintSpell(this.spell_spiritVolley, this.readyColor);
			this.spiritVolley_cooldown.visible = false;
		}

	}

	tintSpell(spell, color) {
		spell.tintTopLeft = color;
		spell.tintTopRight = color;
		spell.tintBottomLeft = color;
		spell.tintBottomRight = color;
	}	

	activateAbilities() {

		if (Phaser.Input.Keyboard.JustDown(this.inputKeys.one)) {
			this.activateSpiritStrike();
		} else if (Phaser.Input.Keyboard.JustDown(this.inputKeys.three)) {
			this.activateSpiritLance();
		}  else if (Phaser.Input.Keyboard.JustDown(this.inputKeys.four)) {
			this.activateSpiritChains();
		}  else if (Phaser.Input.Keyboard.JustDown(this.inputKeys.five)) {
			this.activateSpiritVolley();
		}  else if (Phaser.Input.Keyboard.JustDown(this.inputKeys.seven)) {
			this.activateSpiritShield();
		}

	}
	
	initClickHandlers() {
		this.spell_spiritStrike.setInteractive();
		this.spell_spiritLance.setInteractive();
		this.spell_spiritChains.setInteractive();
		this.spell_spiritVolley.setInteractive();
		this.spell_spiritShield.setInteractive();
		
		var thisBar = this;
		
		this.spell_spiritStrike.on('pointerdown', function (pointer) {
			thisBar.activateSpiritStrike();
		});
		this.spell_spiritLance.on('pointerdown', function (pointer) {
			thisBar.activateSpiritLance();
		});
		this.spell_spiritChains.on('pointerdown', function (pointer) {
			thisBar.activateSpiritChains();
		});
		this.spell_spiritVolley.on('pointerdown', function (pointer) {
			thisBar.activateSpiritVolley();
		});
		this.spell_spiritShield.on('pointerdown', function (pointer) {
			thisBar.activateSpiritShield();
		});
	}
	
	isGCD() {
		var currentTime = new Date();
		var gcd = (currentTime - this.last_GCD_time) < 1000;
		return gcd;
	}

	activateSpiritStrike() {
		if(this.targetFrame.target == null) {
			return;	
		}
		
		if(this.isGCD()) {
			// Can't do anything while GCD still active
			return;
		}
		
		if(!this.isInRange(this.player, this.targetFrame.target, 6)) {
			return;
		}
		
		this.targetFrame.target.applySpiritStrike();
		
		this.setAbilityText("Spirit Strike");
		this.setGCD();
	}

	activateSpiritLance() {
		if(this.targetFrame.target == null) {
			return;
		}

		if(this.isGCD()) {
			// Can't do anything while GCD still active
			return;
		}
		
		if(!this.isInRange(this.player, this.targetFrame.target, 30)) {
			return;	
		}
		
		this.targetFrame.target.applySpiritLance();

		this.setAbilityText("Spirit Lance");
		this.setGCD();
	}

	activateSpiritChains() {
		if(this.spiritChains_cooldown.visible) {
			return; // Still cooling	
		}

		if(this.isGCD()) {
			// Can't do anything while GCD still active
			return;
		}
		
		for(var i = 0; i < 4; i++) {
			if(this.ghosts[i].alive && this.isInRange(this.player, this.ghosts[i], 12)) {
				this.ghosts[i].applySpiritChains()
			}
		}

		this.last_spiritChains_time = new Date();
		this.setAbilityText("Spirit Chains");
		this.setGCD();
	}

	activateSpiritVolley() {
		if(this.spiritVolley_cooldown.visible) {
			return; // Still cooling	
		}

		if(this.isGCD()) {
			// Can't do anything while GCD still active
			return;
		}
		
		for(var i = 0; i < 4; i++) {
			if(this.ghosts[i].alive && this.isInRange(this.player, this.ghosts[i], 12)) {
				this.ghosts[i].applySpiritVolley()
			}
		}

		this.last_spiritVolley_time = new Date();
		this.setAbilityText("Spirit Volley");
		this.setGCD();
	}

	activateSpiritShield() {
		if(this.isGCD()) {
			// Can't do anything while GCD still active
			return;
		}
		this.setAbilityText("Spirit Shield");
		this.setGCD();
	}

	setGCD() {
		this.last_GCD_time = new Date();
	}
	
	setAbilityText(text) {
		this.abilityName.text = text;
		this.abilityName.visible = true;
	}
	
	isInRange(player, target, rangeYards) {
		// In-game player movement speed is 7 yards per second
		// So convert whatever the yards value is into game-coordinates based on this
		var rangeGame = rangeYards * (player.movementSpeed / 7.0);
		
		var distance = Phaser.Math.Distance.BetweenPoints(player, target);
		
		return (distance <= rangeGame);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
