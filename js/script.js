//canvas ww3.schools.com//
//? line //
var c = document.getElementById("canvas1");
var cxy = c.getContext("2d");
cxy.moveTo(0, 0);
cxy.lineTo(222, 222);
cxy.stroke();

cxy.moveTo(222, 0);
cxy.lineTo(100, 222);
cxy.stroke();


//? circle //
var c = document.getElementById("canvas");
var cxy = c.getContext("2d");
cxy.beginPath();
cxy.arc(105, 80, 33, 0, 2 * Math.PI);
cxy.stroke();

//? text1 //
var c = document.getElementById("canvas");
var cxy = c.getContext("2d");
cxy.font = "28px Arial";
cxy.fillText("Hello World", 80, 50);
//? text2 //
var c = document.getElementById("canvas");
var cxy = c.getContext("2d");
cxy.font = "15px Arial";
cxy.strokeText("Hello World", 10, 50);

//? linearGradient //
var c = document.getElementById("canvas");
var cxy = c.getContext("2d");

// Create gradient
var grd = cxy.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
cxy.fillStyle = grd;
cxy.fillRect(10, 10, 150, 80);
//? radialgradient //
var c = document.getElementById("canvas");
var cxy = c.getContext("2d");

// Create gradient
var grd = cxy.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
cxy.fillStyle = grd;
cxy.fillRect(10, 10, 150, 80);

//? drawImg //
var c = document.getElementById("canvas");
var cxy = c.getContext("2d");
var img = document.getElementById("scream");
cxy.drawImage(img, 10, 10);