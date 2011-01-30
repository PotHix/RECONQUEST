// Map Class

var Map = function()
{

    var object = null;

    this.init = function() 
    {
        this.object = gbox.addObject({
 
            id: 'map_id',
            group: 'map',
            image: 'map_background',
            
            wall_list: [],
            
            x: 0,
            y: 0,
         
            initialize: function() {
                for (var i = 0; i < 8; i++)
                {
                    var w = new Wall;
                    w.init();
                    w.object.y = 214;
                    w.object.tile_line = i;
                    w.object.x = (i * w.object.w) + 38;
                    
                    this.wall_list[i] = w;
                }
            },
         
            first: function() {
                // ...
            },
         
            blit: function() {
                gbox.blitFade(gbox.getBufferContext(),{});
                
                gbox.blitAll(gbox.getBufferContext(), gbox.getImage(this.image), {dx:this.x, dy:this.y});
            },
            
        });
    
    }
}
