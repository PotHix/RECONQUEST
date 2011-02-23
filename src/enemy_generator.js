// Enemy Generator Class

var EnemyGenerator = function() {
	return {
		id: 'enemy_generator_id',
		group: 'enemy',

		enemies: [],
		max_enemies: 5,

		x: 0, y: 0,

		initialize: function() {
			for (var i = 0; i < this.max_enemies; i++) {
				this.addEnemy();
			}           
		},

		spawn: function(e) {
			e.life = 100;
			e.wall = true;
			e.ypushing = 1;

			e.tile_in_map = Math.floor(Math.random()*8);

			e.velocity = Math.floor(Math.random()*10) / 10 + 0.2;
			e.frames.movingdown.speed = 3 - e.velocity;

			e.x = e.tile_in_map * 48 + 54;
			e.y = Math.floor(Math.random()*30)*20 - 700;                      
		},

		addEnemy: function() {
			var e = new Enemy;
			gbox.addObject(e);

			this.spawn(e);
			this.enemies.push(e);    
		}    
	}
}

