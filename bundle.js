{
  // Images
  addImage:[
    ["logo","resources/logo.png"],
    ["titan-ice","resources/titan-ice.png"],
    ["minion-ice","resources/minion-ice.png"],
    ["font","resources/font.png"],
    ["health","resources/bar-health.png"],
    ["energy","resources/bar-energy.png"],
    ["enemy01","resources/enemy01.png"],
    ["map_background", "resources/map_background.png"],
    ["player","resources/titan-ice.png"],
    ["spell1","resources/ice_spell.png"],
    ["wall", "resources/wall.png"],
    
    ["enemy01-shadow", "resources/enemy01-shadow.png"]
  ],

  // Tiles
  addTiles:[
    {id:"enemy-tiles", image:"enemy01", tilew:16,  tileh:32, tilerow:6, gapx:0, gapy:0},
    {id:"spell-tile",  image:"spell1",  tilew:16,  tileh:32, tilerow:1, gapx:0, gapy:0},
    {id:"hud-health",  image:"health",  tilew:222, tileh:23, tilerow:6, gapx:0, gapy:0},
    {id:"hud-energy",  image:"energy",  tilew:222, tileh:23, tilerow:6, gapx:0, gapy:0}
  ],

  // Fonts
  addFont:[
    {id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:8}
  ]
}
