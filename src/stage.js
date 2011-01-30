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

                map = new Map;
                map.init();

                this.enemyGenerator = new EnemyGenerator;
                this.enemyGenerator.init();
            },
         
            first: function() {
                
            },
         
            blit: function() {
                // HEHE
            },
            
        });
    
    }
}
