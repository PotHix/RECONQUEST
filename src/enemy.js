// Class to take care of enemies
var Enemy = function(){
  this.init = function(){
    gbox.addObject({
      id: 'enemy-object',
      group: 'enemy',
      tileset: 'enemy-tiles',
      x:230,
      frames:{
	  standup:{ speed:1, frames:[8] },
	  standdown:{ speed:1, frames:[0] },
	  standleft:{ speed:1, frames:[7] },
	  standright:{ speed:1, frames:[6] },
	  movingup:{speed:3,frames:[5] },
	  movingdown:{speed:2,frames:[2,3] },
	  movingleft:{speed:3,frames:[9] },
	  movingright:{speed:3,frames:[4] },
      },
      counter:2,

      initialize: function() {
      	  toys.topview.initialize(this, {
	  });

      },

      first: function() {
	this.counter=(this.counter+1)%60; // We shouldn't do this =/

	toys.topview.controlKeys(this, { left: 'left', right: 'right', up: 'up', down: 'down' });
	toys.topview.handleAccellerations(this);
	toys.topview.applyForces(this);
	toys.topview.setFrame(this);
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
