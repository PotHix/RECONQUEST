// Class to take care of enemies
var EnergyBar = function(){
  var object = null;

  this.init = function(){
    maingame.hud.setWidget("energy",{
      widget:    "symbols",
      tiles:     [5,4,3,2,1,0],
      minvalue:  0,
      maxvalue:  20,
      value:     12-(maingame.difficulty*4),
      maxshown:  1,
      tileset:   "hud-energy",
      emptytile: 5,
      dx:        4,
      dy:        10,
      gapx:      0,
      gapy:      0
    });
  }
}

