// Class to take care of enemies
var EnergyBar = function(){
  var object = null;

  this.init = function(){
    this.object = maingame.hud.setWidget("energy",{
      widget:    "symbols",
      tiles:     [0,1,2,3,4,5],
      value:     1,
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

