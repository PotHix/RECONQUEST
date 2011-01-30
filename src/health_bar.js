// Class to take care of enemies
var HealthBar = function(){
  var object = null;

  this.init = function(){
    maingame.hud.setWidget("health",{
      widget:    "symbols",
      tiles:     [0,1,2,3,4,5],
      value:     6,
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

