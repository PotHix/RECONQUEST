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
    ["platform", "resources/platform.png"],
    ["hit-sparks", "resources/splash.png"]
  ],

  // Tiles
  addTiles:[
    {id:"enemy-tiles",  image:"enemy01",          tilew:16,  tileh:32, tilerow:6, gapx:0, gapy:0},
    {id:"hud-energy",   image:"energy",           tilew:222, tileh:23, tilerow:6, gapx:0, gapy:0},
    {id:"hud-health",   image:"health",           tilew:222, tileh:23, tilerow:6, gapx:0, gapy:0},
    {id:"player-upper", image:"titan-ice-upper",  tilew:64,  tileh:80, tilerow:5, gapx:0, gapy:0},
    {id:"player-bottom",image:"titan-ice-bottom", tilew:64,  tileh:64, tilerow:5, gapx:0, gapy:0},
    {id:"spell-tile",   image:"spell1",           tilew:16,  tileh:32, tilerow:2, gapx:0, gapy:0},
    {id:"hit-sparks-tiles",   image:"hit-sparks",           tilew:16,  tileh:16, tilerow:3, gapx:0, gapy:0}
  ],

  // Fonts
  addFont:[
    {id:"small", image:"font", firstletter:" ", tileh:8, tilew:8, tilerow:255, gapx:0, gapy:8}
  ],

  // Audio
  addAudio:[
    ["explosion",["resources/audio/megaexplosion.mp3","resources/audio/megaexplosion.ogg"],{channel:"sfx"}],
    ["title_screen",["resources/audio/solitude-boss.mp3","resources/audio/solitude-boss.ogg"],{channel:"sfx",loop:true}],
    ["bgm",["resources/audio/tlol-cave.mp3","resources/audio/tlol-cave.ogg"],{channel:"sfx",loop:true}]
  ]
}
