{
  // Images
  addImage:[
    ["enemy01","resources/enemy01.png"],
    ["enemy01-shadow", "resources/enemy01-shadow.png"],
    ["energy","resources/bar-energy.png"],
    ["font","resources/font.png"],
    ["health","resources/bar-health.png"],
    ["logo","resources/logo.png"],
    ["map_background", "resources/map_background.png"],
    ["minion-ice","resources/minion-ice.png"],
    ["spell1","resources/ice_spell.png"],
    ["titan-ice-upper","resources/titan-ice_upper.png"],
    ["titan-ice-bottom","resources/titan-ice_bottom.png"],
    ["titan-ice-shadow","resources/titan-ice_shadow.png"],
    ["wall", "resources/wall.png"],
    ["platform", "resources/platform.png"]
  ],

  // Tiles
  addTiles:[
    {id:"enemy-tiles",  image:"enemy01",          tilew:16,  tileh:32, tilerow:6, gapx:0, gapy:0},
    {id:"hud-energy",   image:"energy",           tilew:222, tileh:23, tilerow:6, gapx:0, gapy:0},
    {id:"hud-health",   image:"health",           tilew:222, tileh:23, tilerow:6, gapx:0, gapy:0},
    {id:"player-upper", image:"titan-ice-upper",  tilew:64,  tileh:64, tilerow:5, gapx:0, gapy:0},
    {id:"player-bottom",image:"titan-ice-bottom", tilew:64,  tileh:64, tilerow:5, gapx:0, gapy:0},
    {id:"spell-tile",   image:"spell1",           tilew:16,  tileh:32, tilerow:1, gapx:0, gapy:0}
  ],

  // Fonts
  addFont:[
    {id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:8}
  ]
}
