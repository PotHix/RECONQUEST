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
      counter:2,
      
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
	    

        if (this.y < this.point_to_shoot)
        {
          this.y += this.velocity;
        }
        else
        {
          this.ypushing = 0;
        }
          

        //toys.topview.controlKeys(this, { left: 'left', right: 'right', up: 'up', down: 'down' });
        toys.topview.handleAccellerations(this);
        toys.topview.applyForces(this);
        toys.topview.setFrame(this);
      },
      
      isShooting: function() {
        return this.y >= this.point_to_shoot;
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
