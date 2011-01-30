{
  // Images
  addImage:[
    ["logo","resources/logo.png"],
    ["titan-ice","resources/titan-ice.png"],
    ["minion-ice","resources/minion-ice.png"],
    ["font","resources/font.png"],
    ["health-frame","resources/bar_health-frame.png"],
    ["energy-frame","resources/bar_energy-frame.png"],
    ["health-fluid","resources/bar_health-fluid.png"],
    ["energy-fluid","resources/bar_energy-fluid.png"],
    ["enemy01","resources/enemy01.png"],
    ["map_background", "resources/map_background.png"],
    ["player","resources/titan-ice.png"],
    ["spell1","resources/ice_spell.png"],
    ["wall", "resources/wall.png"]
  ],

  // Tiles
  addTiles:[
    {id:"enemy-tiles",      image:"enemy01", tilew:16,  tileh:32, tilerow:6, gapx:0, gapy:0},
    {id:"spell-tile",       image:"spell1",  tilew:16,  tileh:32, tilerow:1, gapx:0, gapy:0},
    {id:"hud-health-frame", image:"health-frame",  tilew:221, tileh:23, tilerow:1, gapx:0, gapy:0},
    {id:"hud-energy-frame", image:"energy-frame",  tilew:221, tileh:23, tilerow:1, gapx:0, gapy:0},
    {id:"hud-health-fluid", image:"health-fluid",  tilew:194, tileh:9,  tilerow:1, gapx:0, gapy:0},
    {id:"hud-energy-fluid", image:"energy-fluid",  tilew:194, tileh:9,  tilerow:1, gapx:0, gapy:0}
  ],

  // Fonts
  addFont:[
    {id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:8}
  ]
}
