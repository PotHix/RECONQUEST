// Map Class

var Map = function()
{
    this.init = function() 
    {
        gbox.addObject({
 
            id: 'map_id',
            group: 'map',
         
            initialize: function() {
              // ...
            },
         
            first: function() {
              // ...
            },
         
            blit: function() {
                gbox.blitFade(gbox.getBufferContext(),{});
                gbox.blit(gbox.getBufferContext(), gbox.getImage('map_background'), {dx:0, dy:0});
            },
            
        });
    
    }
}
