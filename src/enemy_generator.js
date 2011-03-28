// Enemy Generator Class

var EnemyGenerator = function() {
	return {
		id: 'enemy_generator_id',
		group: 'enemy',

		enemies: [],
		max_enemies: 5,

		x: 0, y: 0,

		initialize: function() {
			// Do nothing...           
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
		},
		
		/**
		 * Experimental function:
		 *  		Sets the amount of enemies of each kind.
		 *  		
		 * @param: enemies_dic: A dictionary with: kind_of_enemy -> # of enemies:
		 * 				~> regular: basic enemies
		 */
		addEnemies: function(enemies_dic){         
			// Adds the regular enemies
			for (var i = 0; i < enemies_dic.regular; i++) {
				this.addEnemy();
			}
		}
	}
}

