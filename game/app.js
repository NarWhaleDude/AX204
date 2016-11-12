console.log("Working");

var canvas;
var ctx;

var x = 300;
var y = 300;
var r = 20;

var mx = 200;
var my = 300;

var gunX;
var gunY;
var zombieX;
var zombieY;

var gunCollision = false;
var zombieCollision = false;

var spriteWidth;
var spriteHeight

var WIDTH = 600;
var HEIGHT = 600;
var score = 0;



// Draw circle
function circle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28)
	ctx.closePath();
	ctx.fillStyle = "firebrick";
	ctx.fill();
}

//wipe the canvas
function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// Import images as sprites
function drawGun() {
	ctx = document.getElementById("scene").getContext("2d");
    var gun1 = new Image();
    gun1.src = "gun.png";
    ctx.drawImage(gun1, gunX, gunY, 150, 70);
}

function drawZombie() {
	ctx = document.getElementById("scene").getContext("2d");
    var zombie = new Image();
    zombie.src = "zombie.png";
    ctx.drawImage(zombie, zombieX, zombieY, 75, 95);
}


//activate animation
function init() {
	ctx = document.getElementById("scene").getContext("2d");
    // put our sprites to random places
    zombieX = Math.floor(Math.random() * 550);
    zombiey = Math.floor(Math.random() * 550);
    gunX = Math.floor(Math.random() * 550);
    gunY = Math.floor(Math.random() * 550);
    //wait for user to press keyboard
    window.onkeydown = keydownControl;
    //redraw canvas every 10 mil seconds
    return setInterval(draw, 10);
}


// draw function
function draw() {
	clear();
	circle(x, y, r);
	drawGun();
	drawZombie();
	//tell sprites to bounce of walls
    if (x + mx > WIDTH - r || x + mx < r) {
    	mx = -mx
    } else if (y + my > HEIGHT - r || y + my < r) {
    	my = -my
    }
	// move our sprite
	x += mx; // means the same as x = x + mx
	y += my;



	// Is there a collision? what happens if there is
	collisionCheck();
	collisionHandle();
}

// create collision check and handler
function collisionCheck() {
    if ( ( x >= zombieX) && (x <= zombieX + spriteWidth) && (y >= zombieY) && (y <= zombieY + spriteHeight) ) {
    	zombieCollision = true;
    } else {
    	zombieCollision = false;
    }

        if ( ( x >= gunX) && (x <= gunX + spriteWidth) && (x >= zombieX) && (x <= zombieX + spriteHeight) ) {
    	gunCollision = true;
    } else {
    	gunCollision = false;
    }
}

function collisionHandle() {
    if (zombieCollision == true) {
    	    zombieX = Math.floor(Math.random() * 550);
            zombiey = Math.floor(Math.random() * 550);
        score -= 1;
        document.getElementById("score").innerHTML = score;
    }

        if (gunCollision == true) {
    	    gunX = Math.floor(Math.random() * 550);
            gunY = Math.floor(Math.random() * 550);
        score += 1;
        document.getElementById("score").innerHTML = score;
    }
}

// create fuction that changes mx and my depending on what key is pressed 
function keydownControl(e) {
    if (e.keyCode == 37) {
    	mx = -4;
    	my = 0;
    } else if (e.keyCode == 38) {
    	mx = 0;
    	my = -4;
    } else if (e.keyCode == 39) {
    	mx = 4;
    	my = 0;
    } else if (e.keyCode == 40) {
    	mx = 0;
    	my = 	4;
    }
}



// call our entry point function
init();






// // Making Img
// var gun_guy = new Image();
// gun_guy.src = "gg.png"
// //Pic on canvas
// gun_guy.onload = function() {
//       ctx5.drawImage(gun_guy, 200, 300, 85, 105);
// }









// // scenery
// var c5 = document.getElementById("scene");
// var ctx5 = c5.getContext("2d");
// // sky and land
// ctx5.fillStyle = "dark green";
// ctx5.fillRect(0, 350, 800, 150);
// ctx5.fillStyle = "#7a7a7a";
// ctx5.fillRect(0, 0, 800, 350);
// // Sun
// ctx5.beginPath();
// ctx5.arc(100, 100, 50, 0, 6.28);
// ctx5.closePath();
// ctx5.stroke();
// ctx5.fillStyle = "white";
// ctx5.fill();
// // road
// ctx5.beginPath();
// ctx5.strokeStyle = "black"
// ctx5.lineTo(350,350);
// ctx5.lineTo(400,350);
// ctx5.lineTo(450,500);
// ctx5.lineTo(300,500);
// ctx5.lineTo(350,350);
// ctx5.moveTo(375,350);
// ctx5.lineTo(375,500);
// ctx5.fillStyle = "grey"
// ctx5.fill();
// ctx5.closePath();
// ctx5.stroke();

// // text
// ctx5.font = "bold 40pt Arial"
// ctx5.fillStyle = "black"
// ctx5.fillText("Get the gun! Your out of ammo!", 0, 50);





