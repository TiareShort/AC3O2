var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(0,0);
ctx.lineTo(300,300);
ctx.strokeStyle = "DeepSkyBlue"
ctx.stroke();
ctx.fillStyle = "aqua";
ctx.fillRect(0,250,50,50);
ctx.strokeRect(250,0,50,50);
ctx.clearRect(10,260,30,30);

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.fillRect(0,0,150,150);
ctx2.fillRect(150,150,150,150);
ctx2.fillRect(150,0,150,150);
ctx2.fillRect(0,150,150,150);
ctx2.clearRect(20,20,120,120);
ctx2.clearRect(160,20,120,120);
ctx2.clearRect(160,160,120,120);
ctx2.clearRect(20,160,120,120);

