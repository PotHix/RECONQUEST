// Wall Class
var Wall = function() {
	var object = null;

	this.init = function() {
		this.object = gbox.addObject({
			group: 'wall',
			image: 'wall',

			x: 0, y: 0,
			w: 48, h: 48,

			tile_line: 0,

			life: 100,

			blit: function() {
				if (this.life > 0)
					gbox.blitAll(gbox.getBufferContext(), gbox.getImage(this.image), {dx:this.x, dy:this.y});
			}
		});
	}
}

