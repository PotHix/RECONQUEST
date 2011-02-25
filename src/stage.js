// Stage Class

var Stage = function () {
	return {
		group: 'game',
		x: 0,  y: 0,
		w: 48, h: 48,

		energy_counter: 0,

		game_over: false,

		initialize: function() {
			player = new Player;
			player.init();

			/*minion = new Minion;
			minion.init();*/

			this.map = new Map;
			gbox.addObject(this.map);

			this.enemyGenerator = new EnemyGenerator;
			gbox.addObject(this.enemyGenerator);

			// No energy bar for now...
			/*this.energy = new EnergyBar;
			this.energy.init();*/

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
			gbox.stopAudio("title_screen");
			gbox.playAudio("bgm");
			var enemies = this.enemyGenerator.enemies;

			if (this.energy_counter++ > 200) {
				// No energy bar for now...
				/*if (maingame.hud.getValue("energy", "value") < 100) {
					maingame.hud.addValue("energy","value",20);
				}*/

				this.enemyGenerator.addEnemy();
				this.energy_counter = 0;
			}

			for (var i = 0; i < enemies.length; i++) {
				var e = enemies[i];

				if (e.life <= 0) {
					this.enemyGenerator.spawn(e);

				} else if (e && e.life > 0) {

					if (e.y > gbox.getScreenH()) {
						maingame.hud.addValue("health","value",-20);
						this.enemyGenerator.spawn(e);

						if (maingame.hud.getValue("health", "value") < 1 && !this.game_over) {
							gbox.stopAudio("bgm");
							maingame.playerDied({wait:15});
							this.game_over = true;
						}
					}

					if (e.isShooting()) {
						var wall = this.map.wall_list[e.tile_in_map];
						wall.life -= e.force;

						if (wall.life <= 0) {
							e.walkAgain();
						}
					}
				}
			}
		}
	};
}

