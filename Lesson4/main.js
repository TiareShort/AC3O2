var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var myImage = new Image();
myImage.src = "download.jpg";

myImage.onload = function(){
	ctx.drawImage(myImage, 0, 0, 500, 500);
	ctx.font = "60px Arial";
	ctx.fillStyle = "royalblue";
	ctx.fillText("Canvas", 140, 125);
	ctx.strokeStyle = "seagreen";
	ctx.strokeText("Text", 240, 205);
}
