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

			this.map = new Map;
			this.map.init();

			this.enemyGenerator = new EnemyGenerator;
			this.enemyGenerator.init();

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
			var enemies = this.enemyGenerator.object.enemies;

			if (this.energy_counter++ > 200) {
				// No energy bar for now...
				/*if (maingame.hud.getValue("energy", "value") < 6) {
					maingame.hud.addValue("energy","value",1);
				}*/

				this.enemyGenerator.object.addEnemy();
				this.energy_counter = 0;
			}

			for (var i = 0; i < enemies.length; i++) {
				var e = enemies[i];

				if (e.object.life <= 0) {
					this.enemyGenerator.object.spawn(e);

				} else if (e.object && e.object.life > 0) {

					if (e.object.y > gbox.getScreenH()) {
						maingame.hud.addValue("health","value",-1);
						this.enemyGenerator.object.spawn(e);

						if (maingame.hud.getValue("health", "value") < 2 && !this.game_over) {
							gbox.stopAudio("bgm");
							maingame.playerDied({wait:15});
							this.game_over = true;
						}
					}

					if (e.object.isShooting()) {
						var w = this.map.object.wall_list[e.object.tile_in_map];
						w.object.life -= e.object.force;

						if (w.object.life <= 0) {
							e.object.walkAgain();
						}
					}
				}
			}
		},
	};
}

