// Class to take care of enemies
var HealthBar = function(){
  var object = null;

  this.init = function(){
    maingame.hud.setWidget("health",{
      widget:    "symbols",
      tiles:     [0,1,2,3,4,5],
      minvalue:  0,
      maxvalue:  20,
      value:     12-(maingame.difficulty*4),
      maxshown:  1,
      tileset:   "hud-health",
      emptytile: 0,
      dx:        234,
      dy:        10,
      gapx:      0,
      gapy:      0
    });
  }
}

