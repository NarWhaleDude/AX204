console.log("Working");

// Making Img
var gun_guy = new Image();
gun_guy.src = "gg.png"
//Pic on canvas
gun_guy.onload = function() {
      ctx5.drawImage(gun_guy, 200, 300, 85, 105);
}
//Making img
var building = new Image();
building.src = "building.png"
//pic on canvas
building.onload = function() {
	ctx5.drawImage(building, 500, 110, 200, 300);
}

//Making Img
var zombie = new Image();
zombie.src = "zombie.png"
//Pic on canvas
zombie.onload = function() {
	ctx5.drawImage(zombie, 450, 310, 75, 95);
}

/*var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "#00f900";
ctx.moveTo(75,0);
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#00f900";
ctx.fill(); 

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.strokeStyle = "#00f900";
ctx2.lineTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(0,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,0)
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "#00f900";
ctx2.fill();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.strokeStyle = "#00f900";
ctx3.arc(100,100,50,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "#00f900"
ctx3.fill

var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");
ctx4.beginPath();
ctx4.strokeStyle = "#00f900";
ctx4.lineTo(0,0);
ctx4.lineTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(0,150);
ctx4.lineTo(0,0);
ctx4.moveTo(300,0);
ctx4.lineTo(0,300);
ctx4.lineTo(150,300);
ctx4.lineTo(150,0);
ctx4.lineTo(300,0);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "#00f900";
ctx4.fill(); */




// scenery
var c5 = document.getElementById("scene");
var ctx5 = c5.getContext("2d");
// sky and land
ctx5.fillStyle = "dark green";
ctx5.fillRect(0, 350, 800, 150);
ctx5.fillStyle = "#7a7a7a";
ctx5.fillRect(0, 0, 800, 350);
// Sun
ctx5.beginPath();
ctx5.arc(100, 100, 50, 0, 6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "white";
ctx5.fill();
// road
ctx5.beginPath();
ctx5.strokeStyle = "black"
ctx5.lineTo(350,350);
ctx5.lineTo(400,350);
ctx5.lineTo(450,500);
ctx5.lineTo(300,500);
ctx5.lineTo(350,350);
ctx5.moveTo(375,350);
ctx5.lineTo(375,500);
ctx5.fillStyle = "grey"
ctx5.fill();
ctx5.closePath();
ctx5.stroke();

// text
ctx5.font = "bold 40pt Arial"
ctx5.fillStyle = "black"
ctx5.fillText("Objective", 450, 90);





