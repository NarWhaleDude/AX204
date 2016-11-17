console.log("yay");

// Declare the variables
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;

function preload(){
    game.load.image("sky", "assets/sky.png");
    game.load.image("ground", "assets/platform.png");
    game.load.image("star", "assets/star.png");
    game.load.spritesheet("dude", "assets/dude.png", 32, 48);
    game.load.spritesheet("baddie", "assets/baddie.png", )
}

function create(){
    // Give game physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add the sky
    game.add.sprite(0, 0, "sky");

    // Physics group
    platforms = game.add.physicsGroup();
    platforms.enableBody = true;

    // ground
    var ground = platforms.create(0, game.world.height - 64, "ground");
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;

    // Ledges
    var ledge = platforms.create(400, 400, "ground");
    ledge.body.immovable = true;

    var ledge = platforms.create(-150, 250, "ground");
    ledge.body.immovable = true;

    //Player
    player = game.add.sprite(32, game.world.height - 150, "dude");
    // animate sprite
    player.animation.add("left", [0,1,2,3], 10, true);
    player.animation.add("right", [5,6,7,8], 10, true);
    game.physics.arcade.enable(player);
    // specify the physics
    player.body.bounce.y = 0.3;
    player.body.gravity.y = 301;
    player.body.colideWorldBounds = true;

    //enemy
  baddie1 = game.add.sprite(750, 20, "baddie");
  //animate  the sprite
  baddie1.animation.add("left", [0,1], 10, true);
  baddie1.animation.add("right", [2,3], 10, true);
  game.physics.arcade.enable(baddie1);
  // specify the physics
  baddie1.body.bounce.y = 0.3;
  baddie1.body.gravity.y = 301;
  baddie1.body.colideWorldBounds = true;

  //Keyboard events
  cursors = game.input.Keyboard.createCursorKeys();
}



function update(){

}
