gbox.addTiles({
  id:      'player_tiles',
  image:   'player',
  tileh:   16,
  tilew:   16,
  tilerow: 1,
  gapx:    0,
  gapy:    0
});

function addPlayer() {
  gbox.addObject({

    id: 'player_id',
    group: 'player',
    tileset: 'player_tiles',
    x: 200,
    y: 250,

    initialize: function() {

      toys.topview.initialize(this, {});
    },

    first: function() {
      toys.topview.controlKeys(this, { left: 'left', right: 'right'});
      toys.topview.handleAccellerations(this);
      toys.topview.applyForces(this);
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

