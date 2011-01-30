var Player = function(){

  var object = null;

  this.init = function(){
    this.object = gbox.addObject({
      id: 'player_id',
      group: 'player',
      tileset: 'player-tiles',
      weapon: 0,
      time: 2,
      counter: 2,

      x: 200, y: 240,
      w: 64, h: 64,

      fireBullet:function(){
        toys.shmup.fireBullet("playerbullets",null,{
          collidegroup:"enemy",
          from:this,
          upper:true,
          tileset:"spell-tile",
          spark:function(th){
            defaultSpark(th)
          },
          accx:0, accy:-8
        });
      },

      initialize: function() {
	toys.topview.initialize(this, {
	    frames:{
		    hit:      { speed:1, frames:[0] },
		    still:      { speed:1, frames:[0] },
		    standup:    { speed:1, frames:[0] },
		    standdown:  { speed:1, frames:[0] },
		    standleft:  { speed:1, frames:[0] },
		    standright: { speed:1, frames:[0] },
		    movingup: { speed:1, frames:[1,2,1,3] },
		    movingdown:{ speed:1, frames:[1,2,1,3] },
		    movingleft: { speed:1, frames:[1,2,1,3] },
		    movingright:{ speed:1, frames:[1,2,1,3] },
		    pushingup:  {speed:1,frames:[0] },
		    pushingdown:{speed:1,frames:[0] },
		    pushingleft:{speed:1,frames:[0] },
		    pushingright:{speed:6,frames:[0] }

	    }
	});
      },

      first: function() {
	this.counter=(this.counter+1)%60; // We shouldn't do this =/

	var space = 10;
	var x_pos = gbox.getScreenW() - this.w - space;

	// Limits border
	if (this.x < space) this.x = space;
	else if (this.x > x_pos) this.x = x_pos;

	toys.topview.controlKeys(this, { left: 'left', right: 'right'});
	toys.topview.handleAccellerations(this);
	toys.topview.applyForces(this);
	toys.topview.setFrame(this);

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
      },
    });
  }
}

