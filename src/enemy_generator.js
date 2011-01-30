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
            
            max_enemies: 10,
            
            enemies: [],
         
            initialize: function() {
                for (var i = 0; i < this.max_enemies; i++)
                {
                    var e = new Enemy;
                    e.init();
                    e.object.x =  * i;
                    e.object.y = 10;
                    this.enemies[i] = e;
                }
                
                alert("ok");
            },
         
            first: function() {
              // ...
            },
         
            blit: function() {
                
                //gbox.blitAll(gbox.getBufferContext(), gbox.getImage(this.image), {dx:this.x, dy:this.y});
            },
            
            startEnemies: function() {
                for (var i = 0; i < this.max_enemies; i++)
                {
                    //enemies[i].init();
                }
            },
            
        });
    
    }
}
