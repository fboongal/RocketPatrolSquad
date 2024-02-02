// Name: Franchesca Boongaling
// Mod Title: Rocket Patrol Squad
// Hours Spent Modding: 14 
// Mods Implemented: 
// - (5) Simultaneous 2 Player Mode 
// - (5) New small & fast enemy ship 
// - (3) Time remaining clock
// - (3) New title screen
// - (1) New scrolling tile sprite for the background
// - (1) Background music
// - (1) Control rocket after it's fired
// Citations: Alex (for in-game timer) & Helwa (for looping background music)

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT, keyFIRE2, keyLEFT2, keyRIGHT2

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3