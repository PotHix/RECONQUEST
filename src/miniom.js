var Minion = function(){

	this.init = function(){
		this.create_minion();
	}

	this.create_minion = function(){
		this.upper = gbox.addObject({
			id: 'minion_id',
			group: 'minion',
			tileset: 'minion-tiles',
			weapon: 0,
			time: 2,

			x: 150, y: 224,
			w: 40, h: 40,

			fireBullet:function(){

				toys.shmup.fireBullet("minionbullets",null,{
					collidegroup:"enemy",
					from:this,
					upper:true,
					tileset:"bullet-tile",
					spark:function(th){
						defaultSpark(th)
					},

					accx:0, accy:-8
				});
			},

			initialize: function() {
			},

			first: function() {
				if (this.stilltimer) this.stilltimer--; //The engine should decrease stilltimer for us

				var space = 10;
				var x_pos = gbox.getScreenW() - this.w - space;

				// Limits border
				if (this.x < space) this.x = space;
				else if (this.x > x_pos) this.x = x_pos;

				toys.topview.controlKeys(this, { left: 'left', right: 'right'});
				toys.topview.handleAccellerations(this);
				toys.topview.applyForces(this);

				if (!this.stilltimer) toys.topview.setFrame(this);

				this.time -= 1;
				if (!(1 < this.time) ){
					this.fireBullet();
					this.time = 30;
				}
			},

			blit: function() {
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
		});
	}

}
