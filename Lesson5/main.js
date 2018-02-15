var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var WIDTH = 800;
var HEIGHT = 400;

//ball location
var x, y;
//ball movemet
var mx, my;

//draw circle
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle = "deeppink";
	ctx.fill();
	ctx.stroke();
}

//initialize the animation
function init(){
	x = 400;
	y = 200;
	mx = 3;
	my = 4;
	return setInterval(draw,10);
}


//repeated draw function
function draw(){
	clear();
	circle(x,y,50);
	//ball bounce of edges
	if(x+mx<0 || x+mx>WIDTH){
		mx = -mx;
	}

	if(y+my<0 || y+my>HEIGHT){
		my = -my;
	}
	//ball moves
	x = x + mx;
	y = y + my;
}


function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

//start the animation
init();