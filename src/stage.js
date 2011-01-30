// Stage Class

var Stage = function()
{
    var object = null;
    
    this.init = function() 
    {
        this.object = gbox.addObject({
 
            group: 'game',
            
            x: 0,
            y: 0,
            
            w: 48,
            h: 48,
            

            initialize: function() {
                player = new Player;
                player.init();

                this.map = new Map;
                this.map.init();

                this.enemyGenerator = new EnemyGenerator;
                this.enemyGenerator.init();
            },
         
            first: function() {
                var enemies = this.enemyGenerator.object.enemies;
                
                for (var i = 0; i < enemies.length; i++)
                {
                    var e = enemies[i];
                    
                    if (e.object.isShooting())
                    {
                        var w = this.map.object.wall_list[e.object.tile_in_map];
                        w.object.life -= e.object.force;
                        
                        if (w.object.life <= 0)
                        {
                            e.object.walkAgain();
                        }
                    }
                }
            },
         
            blit: function() {
                // HEHE
            },
            
        });
    
    }
}
