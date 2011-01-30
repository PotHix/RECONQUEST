// Stage Class

var Stage = function()
{
    var object = null;

    this.init = function()
    {
        this.object = gbox.addObject({
            group: 'game',
            x: 0,  y: 0,
            w: 48, h: 48,
            
            energy_counter: 0,

            initialize: function() {
                player = new Player;
                player.init();

                this.map = new Map;
                this.map.init();

                this.enemyGenerator = new EnemyGenerator;
                this.enemyGenerator.init();
                
                this.energy = new EnergyBar;
                this.energy.init();

                this.health = new HealthBar;
                this.health.init();
                
                
                // Adding our platform (sure, it IS bad code. haven't you noticed yet?)
                gbox.addObject({
                    group: "platform",
                    image: "platform",
                    
                    x: 38, y: 275,
                    
                    blit: function() {
                        gbox.blitAll(gbox.getBufferContext(), gbox.getImage(this.image), {dx:this.x, dy:this.y});
                    }
                });
            },

            first: function() {
                var enemies = this.enemyGenerator.object.enemies;
                
                if (this.energy_counter++ > 200)
                {
                    if (maingame.hud.getValue("energy", "value") < 6)
                    {
                        maingame.hud.addValue("energy","value",1);
                    }
                    
                    this.energy_counter = 0;
                }
                
                for (var i = 0; i < enemies.length; i++)
                {
                    var e = enemies[i];

                    if (e.object && e.object.life > 0)
		    {

			if(e.object.y > gbox.getScreenH())
			{
			    maingame.hud.addValue("health","value",-1);
			}

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
                }
            },
        });
    }
}
