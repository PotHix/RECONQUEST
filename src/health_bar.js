// Class to take care of enemies
var HealthBar = function(){
	var object = null;

	this.init = function(){
		maingame.hud.setWidget("health",{
			widget:    "gauge",
			tiles:     [1,0],
			value:     100,
			maxvalue:  100,
			minvalue:  0,
			maxshown:  1,
			emptytile: 0,
			tileset:   "hud-health",
			dx:        234,
			dy:        10
		});
	}
}

