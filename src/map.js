// Map Class
var Map = function() {
	var object = null;

	this.init = function() {
		this.object = gbox.addObject({
			id: 'map_id',
			group: 'map',
			image: 'map_background',

			wall_list: [],

			x: 0, y: 0,

			initialize: function() {
				for (var i = 0; i < 8; i++) {
					var wall = new Wall;
					wall.y = 214;
					wall.tile_line = i;
					wall.x = (i * wall.w) + 38;
					
					gbox.addObject(wall);

					this.wall_list[i] = wall;
				}
			},

			blit: function() {
				gbox.blitFade(gbox.getBufferContext(),{});
				gbox.blitAll(gbox.getBufferContext(), gbox.getImage(this.image), {dx:this.x, dy:this.y});
			}
		});
	}
}

