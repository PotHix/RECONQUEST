// ---
// Copyright (c) 2011 Plæv, PotHix, bojak, CrociDB, RafaelMasoni
// ---

var maingame;

function gameStartUp() {
	var mobile = navigator.userAgent.match(/iPhone/) || navigator.userAgent.match(/Android/);

	gbox.onLoad(function(){
		help.akihabaraInit({
			title:"Rise of the Titans - Plæv Team (GGJ'11)",
			splash:{
				footnotes: ["Plaev Team entry for Global Game Jam '11 at Sao Caetano do Sul, SP - Brazil"],
				background: "resources/splash_screen.png"
			},
			width:  460,
			height: 340,
			zoom: (mobile ? 1 : 1.5)
		});

		gbox.addBundle({file:"game-bundle.js"});
		if (!mobile) gbox.addBundle({file:"audio-bundle.js"});

		gbox.loadAll(main);
	});
}

function main() {
	gbox.setGroups(['map','enemy','wall','platform','playerbullets','player','sparks','game','minion','minionbullets']);
	maingame = gamecycle.createMaingame('game', 'game');

	var stage;

	maingame.gameTitleIntroAnimation = function(reset) {
		gbox.stopAudio("bgm");
		gbox.playAudio("title_screen");
		if (reset) {
			toys.resetToy(this, 'rising');
		}

		gbox.blitFade(gbox.getBufferContext(),{ alpha: 1 });

		toys.logos.linear(this, 'rising', {
			image: 'logo',
			sx:    gbox.getScreenW()/2-gbox.getImage('logo').width/2,
			sy:    gbox.getScreenH(),
			x:     gbox.getScreenW()/2-gbox.getImage('logo').width/2,
			y:     20,
			speed: 2
		});
	};

	maingame.pressStartIntroAnimation = function(reset) {
		if (reset) {
			toys.resetToy(this,"default-blinker");
		} else {
			toys.text.blink(this,"default-blinker",gbox.getBufferContext(),{
				font:"small",
				text:"PRESS Z TO START",
				valign:gbox.ALIGN_MIDDLE,
				halign:gbox.ALIGN_CENTER,
				dx:0,
				dy:Math.floor(gbox.getScreenH()/3),
				dw:gbox.getScreenW(),
				dh:Math.floor(gbox.getScreenH()/3)*2,
				blinkspeed:10
			});
			return gbox.keyIsHit("a");
		}
	};

	maingame.initializeGame = function() {
		this.stage = new Stage();
		gbox.addObject(this.stage);
	};

	// Should not show game menu for now
	maingame.gameMenu = function() { return true; };

	// Just thinking if we want "Let's Begin" on intro game animation
	maingame.gameIntroAnimation = function() { return true; };

	gbox.go();
}
