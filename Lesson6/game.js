var c = document.getElementById("canvas");
var ctx = c.getContext("2d")
var displayScore = document.getElementById("score")

//width and height of canvas
var WIDTH = 600;
var HEIGHT = 600;

//position and size of player
var x = 300;
var y = 300;
var size = 50;

//player speed
var speedX = 0;
var speedY = 0;

//position of mouse
var itemX;
var itemY;
var itemSize = 50;

var score = 0;
var collision = false;



function drawCharacter(){
	var myCat = new Image();
	myCat.src = "tumblr_p3fvt1NCEu1vxe4v6o1_1280.png";
	ctx.drawImage(myCat, x, y, size, size)
}

function drawMouse(){
	var mouse = new Image();
	mouse.src = "Rat-md.png";
	ctx.drawImage(mouse, itemX, itemY, itemSize, itemSize)
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

//start your game (initialise your animation)

function init(){
	itemX = Math.floor(Math.random()*(WIDTH - itemSize));
	itemY = Math.floor(Math.random()*(HEIGHT - itemSize));

	//keyboard event

	window.onkeydown = keydownControl;

	return setInterval(draw, 10);
}

function keydownControl(e){
	if (e.keyCode == 37){
		speedX = -4;
		speedY = 0;
	}
	else if (e.keyCode == 39){
		speedX = 4;
		speedY = 0;
	}
	else if (e.keyCode == 38){
		speedX = 0;
		speedY = -4;
	}
	else if (e.keyCode == 40){
		speedX = 0;
		speedY = 4;
	}
}

function draw(){
	clear();
	drawCharacter();
	drawMouse();

	//bounce of wall

	if (x + speedX < 0 || x + speedX + size > WIDTH){
		speedX = -speedX;
	}

	if (y + speedY < 0 || y + speedY + size > HEIGHT){
		speedY = -speedY;
	}


	x += speedX;
	y += speedY;

collisionCheck();
collisionHandle();

}


function collisionCheck(){
	if((x + size >= itemX) && (itemX + itemSize >= x) && (y + size >= itemY) && (itemY + itemSize >= y)){
		collision = true;
	}
else{
collision = false;
}
}

function collisionHandle(){
	if (collision){
	itemX = Math.floor(Math.random()*(WIDTH - itemSize));
	itemY = Math.floor(Math.random()*(HEIGHT - itemSize));

score +=1;
displayScore.textContent = score;

	}
}


init();