// Class to take care of enemies
var Enemy = function(){
  this.init = function(){
    gbox.addObject({
      id: 'enemy-object',
      group: 'enemy',
      tileset: 'enemy-tile',

      initialize: function() {
      	  toys.topview.initialize(this, {});
      },

      first: function() {
	toys.topview.controlKeys(this, { left: 'left', right: 'right', up: 'up', down: 'down' });
	toys.topview.handleAccellerations(this);
	toys.topview.applyForces(this);
      },

      blit: function() {
	// Clear the screen.
	gbox.blitFade(gbox.getBufferContext(),{});

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
