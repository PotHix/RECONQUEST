// ---
// Copyright (c) 2011 Plæv, PotHix, bojak, CrociDB, RafaelMasoni
// ---

var maingame;
function main(){
  gbox.setGroups(['map','enemy','wall','playerbullets','player','game']);
  maingame = gamecycle.createMaingame('game', 'game');

  var stage;

  maingame.gameTitleIntroAnimation=function(reset) {
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
      speed: 1
    });
  };

  maingame.pressStartIntroAnimation=function(reset) {
    if (reset) {
      toys.resetToy(this,"default-blinker");
    } else {
      toys.text.blink(this,"default-blinker",gbox.getBufferContext(),{font:"small",text:"PRESS Z TO START",valign:gbox.ALIGN_MIDDLE,halign:gbox.ALIGN_CENTER,dx:0,dy:Math.floor(gbox.getScreenH()/3),dw:gbox.getScreenW(),dh:Math.floor(gbox.getScreenH()/3)*2,blinkspeed:10});
      return gbox.keyIsHit("a");
      }
  };

  maingame.initializeGame = function() {
    this.stage = new Stage;
    this.stage.init();

    energy = new EnergyBar;
    energy.init();

    health = new HealthBar;
    health.init();
  };

  // Removing title screens
  maingame.gameMenu = function() { return true; };
  maingame.gameIntroAnimation = function() { return true; };

  gbox.go();
}

