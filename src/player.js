var Player = function(){
  this.init = function(){
    gbox.addTiles({
      id:      'player_tiles',
      image:   'player',
      tileh:   64,
      tilew:   64,
      tilerow: 1,
      gapx:    0,
      gapy:    0
    });

    gbox.addObject({
      id: 'player_id',
      group: 'player',
      tileset: 'player_tiles',
      weapon: 0,

      x: 200, y: 270,
      
      fireBullet:function(){
        toys.shmup.fireBullet("playerbullets",null,{collidegroup:"enemy",from:this,upper:true,tileset:"spell-tile",spark:function(th){defaultSpark(th)},frames:{speed:1,frames:[0]},accx:0,accy:-8});
        
      },

      initialize: function() {
	toys.topview.initialize(this, {});
      },


      first: function() {
	toys.topview.controlKeys(this, { left: 'left', right: 'right'});
	toys.topview.handleAccellerations(this);
	toys.topview.applyForces(this);
	if (gbox.keyIsHit("a"))
	  this.fireBullet();
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

