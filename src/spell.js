gbox.addTiles({
  id:      'ice_spell_tiles',
  image:   'spell',
  tileh:   16,
  tilew:   32,
  tilerow: 1,
  gapx:    0,
  gapy:    0
});

function iceSpell() {
  gbox.addObject({

    id: 'ice_spell_id',
    group: 'spell',
    tileset: 'ice_spell_tiles',
    x: 200,
    y: 250,

    initialize: function() {

      toys.topview.initialize(this, {});
    },

    first: function() {
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

