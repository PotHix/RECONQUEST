// Map Class

var Map = function()
{
    this.init = function() 
    {
        gbox.addObject({
 
            id: 'map_id',
            group: 'map',
            image: 'map_background',
         
            initialize: function() {
              // ...
            },
         
            first: function() {
              // ...
            },
         
            blit: function() {
                gbox.blitFade(gbox.getBufferContext(),{});
                
                gbox.blitAll(gbox.getBufferContext(), gbox.getImage(this.image), {dx:0, dy:0});
            },
            
        });
    
    }
}
