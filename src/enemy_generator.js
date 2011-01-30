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

            max_enemies: 5,

            enemies: [],

            initialize: function() {
                for (var i = 0; i < this.max_enemies; i++)
                {
                    this.addEnemy();
                }
            },
            
            spawn: function(e) {
                e.object.life = 100;
                e.object.wall = true;
                e.object.ypushing = 1;
            
                e.object.tile_in_map = Math.floor(Math.random()*8);
            
                e.object.velocity = Math.floor(Math.random()*10) / 10 + 0.2;
                e.object.frames.movingdown.speed = 3 - e.object.velocity;
                
                e.object.x = e.object.tile_in_map * 48 + 54;
                e.object.y = Math.floor(Math.random()*30)*20 - 700;
            },
            
            addEnemy: function() {
                var e = new Enemy;
                e.init();
                
                this.spawn(e);

                this.enemies.push(e);
            }
        });
    }
}
