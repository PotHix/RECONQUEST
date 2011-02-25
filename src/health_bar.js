// Class to take care of enemies
var HealthBar = function(){
	var object = null;

	this.init = function(){
		maingame.hud.setWidget("health",{
			widget:    "gauge",
			tiles:     [1,0],
			value:     5,
			maxvalue:  5,
			minvalue:  0,
			maxshown:  1,
			emptytile: 0,
			tileset:   "hud-health",
			dx:        234,
			dy:        23
		});
	}
}

