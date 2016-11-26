console.log("TRUMP");

// Declare the variables
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;

function preload(){
    game.load.image("sky", "assets/sky.png");
    game.load.image("ground", "assets/platform.png");
    game.load.image("star", "assets/star.png");
    game.load.spritesheet("dude", "assets/dude.png", 32, 48);
    game.load.spritesheet("baddie", "assets/baddie.png", 32, 32);
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
    player.animations.add("left", [0,1,2,3], 10, true);
    player.animations.add("right", [5,6,7,8], 10, true);
    game.physics.arcade.enable(player);
    // specify the physics
    player.body.bounce.y = 0.3;
    player.body.gravity.y = 301;
    player.body.collideWorldBounds = true;

    //enemy
  var baddie1 = game.add.sprite(750, 20, "baddie");
  //animate  the sprite
  baddie1.animations.add("left", [0,1], 10, true);
  baddie1.animations.add("right", [2,3], 10, true);
  game.physics.arcade.enable(baddie1);
  // specify the physics
  baddie1.body.bounce.y = 0.3;
  baddie1.body.gravity.y = 301;
  baddie1.body.collideWorldBounds = true;

  //Keyboard events
  cursors = game.input.keyboard.createCursorKeys();
}



function update(){
   //make the player sprite and enemy sprite collide with platform
   game.physics.arcade.collide(player, platform);
   game.physics.arcade.collide(baddie1, platform);
   // player speed reset to 0
   player.body.velocity.x = 0;
   //keyboard events
   if (cursors.left.isDown){
     player.body.velocity = -150;
     player.animations.play("left");
   } else if (cursors.right.isDown){
     player.body.velocity = 150
     player.animations.play("right");
   } else {
     player.animations.stop();
     player.frame = 4;
   }
   // allow player to jump
   if (cursors.up.isDown && player.body.touching.down) {
     player.body.velocity.y = -300
   }
   //Enemy AI
   if (baddie1.x > 749) {
     baddie1.animations.play("left");
     baddie1.body.velocity.x = -165
   } else if (baddie1.x < 405) {
     baddie.animation.velocity.x = 165;
   }
}
