// Class to take care of enemies
var Enemy = function(){
	var object = null;

	this.init = function(){
		this.object = gbox.addObject({
				group: 'enemy',
				tileset: 'enemy-tiles',
				x:230,
				frames:{
				standdown:  { speed:2,  frames:[3,4,3,5] },
				movingdown: { speed:2,  frames:[0,1,0,2] },
				firing:     { speed:3,  frames:[3,4,3,5] }
			},

			shadow: "enemy01-shadow",

			counter:2,
			life: 100,

			wall: true,
			force: 0.2,

			point_to_shoot: 200,

			initialize: function() {
				toys.topview.initialize(this, {});
				this.ypushing = 1;
			},

			frame: 3,
			tile_in_map: 0,
			velocity: 1,

			first: function() {
				this.counter=(this.counter+1)%60; // We shouldn't do this =/

				if (this.y > gbox.getScreenH()) {
					this.life = 0;
				}

				if (this.y < this.point_to_shoot || !this.wall)
				{
					this.y += this.velocity;
				} else {
					this.ypushing = 0;
				}

				toys.topview.handleAccellerations(this);
				toys.topview.applyForces(this);
				toys.topview.setFrame(this);
			},

			isShooting: function() {
				return this.y >= this.point_to_shoot;
			},

			hitByBullet: function(by) {
				this.life -= 50;
				toys.generate.sparks.simple(this,"sparks",null,{alpha:0.7,gapy:10,frames:{speed:3,frames:[3,2,1,2,3]},tileset:"hit-sparks-tiles"});
			},

			walkAgain: function() {
				this.wall = false;
				this.ypushing = 1;
			},

			blit: function() {
				if (this.life > 0) {
					gbox.blitAll(gbox.getBufferContext(), gbox.getImage(this.shadow), {dx:this.x+1, dy:this.y+26});
					gbox.blitTile(gbox.getBufferContext(), {
						tileset: this.tileset,
						tile:    this.frame,
						dx:      this.x,
						dy:      this.y,
						fliph:   this.fliph,
						flipv:   this.flipv,
						camera:  this.camera,
						alpha:   1.0
					});
				}
			}
		});
	}
}

