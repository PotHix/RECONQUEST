// Enemy Generator Class

var EnemyGenerator = function()
{
    var object = null;

    this.init = function() 
    { 
        this.object = gbox.addObject({
 
            id: 'enemy_generator_id',
            group: 'enemy',
            
            x: 0,
            y: 0,
            
            max_enemies: 40,
            
            enemies: [],

         
            initialize: function() {
                for (var i = 0; i < this.max_enemies; i++)
                {
                    var e = new Enemy;
                    e.init();
                    
                    e.object.tile_in_map = Math.floor(Math.random()*8);
                    
                    e.object.velocity = Math.floor(Math.random()*10) / 10 + 0.2;
                    
                    e.object.x = e.object.tile_in_map * 48 + 54;
                    e.object.y = Math.floor(Math.random()*700) - 700;
                    
                    this.enemies[i] = e;
                }
            },
         
            first: function() {
              // ...
            },
         
            blit: function() {
                
                //gbox.blitAll(gbox.getBufferContext(), gbox.getImage(this.image), {dx:this.x, dy:this.y});
            },
            
        });
    
    }
}
