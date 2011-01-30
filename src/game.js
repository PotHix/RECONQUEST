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

    maingame.hud.setWidget("health",{
      widget:    "symbols",
      tiles:     [3,2,1,0],
      minvalue:  0,
      maxvalue:  20,
      value:     12-(maingame.difficulty*4),
      maxshown:  4,
      tileset:   "hud-energy-fluid",
      emptytile: 4,
      dx:        40,
      dy:        10,
      gapx:      20,
      gapy:      0
    });
  };

  // Removing title screens
  maingame.gameMenu = function() { return true; };
  maingame.gameIntroAnimation = function() { return true; };

  gbox.go();

}

