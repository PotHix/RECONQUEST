var Player = function(){
	var upper  = null;
	var bottom = null;

	this.init = function(){
		this.create_upper();
		this.create_bottom();
	}

	this.create_upper = function(){
		this.upper = gbox.addObject({
			id: 'player_upper',
			group: 'player',
			tileset: 'player-upper',
			weapon: 0,
			time: 2,

			x: 200, y: 224,
			w: 64, h: 64,

			fireBullet:function(){
				this.frame = 4; //Attacking frame
				this.stilltimer = 5; //Holding attack position for a while

				toys.shmup.fireBullet("playerbullets",null,{
					collidegroup:"enemy",
					from:this,
					upper:true,
					tileset:"spell-tile",
					spark:function(th){
						defaultSpark(th)
					},

					frames: { speed: 3, frames: [0,1] },
					accx:0, accy:-8
				});
			},

			initialize: function() {
				toys.topview.initialize(this, {
					frames:{
						standdown:  { speed:1, frames:[0]   },
						standleft:  { speed:1, frames:[0]   },
						standright: { speed:1, frames:[0]   },
						movingleft: { speed:5, frames:[1,2] },
						movingright:{ speed:5, frames:[1,2] }
					}
				});
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
				if (gbox.keyIsHit("a")){
					if (!(1 < this.time) ){
						this.fireBullet();
						this.time = 10;
					}
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

	this.create_bottom = function(){
		this.bottom = gbox.addObject({
			id: 'player_bottom',
			group: 'player',
			tileset: 'player-bottom',

			x: 200, y: 240,
			w: 64, h: 64,

			shadow: "titan-ice-shadow",

			initialize: function() {
				toys.topview.initialize(this, {
					frames:{
						standdown:  { speed:1, frames:[0] },
						standleft:  { speed:1, frames:[0] },
						standright: { speed:1, frames:[0] },
						movingleft: { speed:5, frames:[1,2] },
						movingright:{ speed:5, frames:[1,2] }
					}
				});
			},

			first: function() {
				var space = 10;
				var x_pos = gbox.getScreenW() - this.w - space;

				// Limits border
				if (this.x < space) this.x = space;
				else if (this.x > x_pos) this.x = x_pos;

				toys.topview.controlKeys(this, { left: 'left', right: 'right'});
				toys.topview.handleAccellerations(this);
				toys.topview.applyForces(this);
				toys.topview.setFrame(this);
			},

			blit: function() {
				gbox.blitAll(gbox.getBufferContext(), gbox.getImage(this.shadow), {dx:this.x+11, dy:this.y+55});
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

