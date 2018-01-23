var	c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(125,150);
ctx.lineTo(300,300);
ctx.lineTo(300,160)
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "mediumOrchid"
ctx.fill()


ctx.beginPath();
ctx.moveTo(150,0);
ctx.lineTo(180,30);
ctx.lineTo(150,60);
ctx.lineTo(120,30);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "PowderBlue"
ctx.fill()
