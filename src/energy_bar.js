// Class to take care of enemies
var EnergyBar = function(){
	var object = null;

	this.init = function(){
		this.object = maingame.hud.setWidget("energy",{
			widget:    "gauge",
			tiles:     [1,0],
			value:     0,
			maxvalue:  100,
			minvalue:  0,
			maxshown:  1,
			emptytile: 5,
			tileset:   "hud-energy",
			dx:        4,
			dy:        10
		});
	}
}

