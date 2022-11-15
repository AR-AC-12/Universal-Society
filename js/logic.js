const BLANCO = "rgba(255, 255, 255, 1)"; //? Good practiques
var text = document.getElementById("text_lineal");
var button = document.getElementById("button_lineal"); //var resett = document.getElementById('reset_lineal');//
button.addEventListener("click", paintforclick);
var p = document.getElementById("paint");
var width = p.width;
var lienzo = p.getContext("2d");
function paintforclick() {
  var lineal = parseInt(text.value); // c = 21
  var i = 0;
  var yi, xf, xi, yf;
  var space = width / lineal;
  var dark = "#111"; // ámbito de variable
  for (
    let i = 0;
    i < lineal;
    i++ //ciclos do while(i < lineal) i = i + 1
  ) {
    yi = space * i;
    xf = space * (i + 1);
    yf = 222 - space * (i + 1);
    xi = 222 - space * i;
    drawLineal(dark, 0, yi, xf, 222); // infLeft
    drawLineal(dark, yi, 1, 221, xf); // supRight
  }
  drawLineal(dark, 1, 1, 1, width);
  drawLineal(dark, 1, 221, 221, width - 1);
  drawLineal("bluedark", 1, 1, 1, 221); //right
  drawLineal("bluedark", 1, 221, 221, 221); //lower
  drawLineal("bluedark", 221, 1, 221, 221); //left
  drawLineal("bluedark", 1, 1, 221, 1); //higher
}
function drawLineal(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath(); // * open lienzo
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath(); // * close lienzo
}

var key = {
  // arrow
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
document.addEventListener("keyup", drawKeyboard); // * keydown
var q = document.getElementById("paintt");
var lienzoo = q.getContext("2d");
var x = 111;
var y = 111;
drawLineall("blue", lienzoo, 110, 110, 112, 112);
drawLineall("black", lienzoo, 1, 1, 1, 221);
drawLineall("black", lienzoo, 1, 221, 221, 221);
drawLineall("black", lienzoo, 221, 1, 221, 221);
drawLineall("black", lienzoo, 1, 1, 221, 1);

function drawLineall(color, lienzoo, xinicial, yinicial, xfinal, yfinal) {
  lienzoo.beginPath();
  lienzoo.strokeStyle = color;
  lienzoo.moveTo(xinicial, yinicial);
  lienzoo.lineTo(xfinal, yfinal);
  lienzoo.stroke();
  lienzoo.closePath();
}
function drawKeyboard(event) {
  var darkk = "#110";
  var move = 10;
  switch (event.keyCode) {
    case key.UP: //if(event.keyCode == key.UP);
      drawLineall(darkk, lienzoo, x, y, x, y - move);
      y = y - move;
      break;
    case key.DOWN:
      drawLineall(darkk, lienzoo, x, y, x, y + move);
      y = y + move;
      break;
    case key.LEFT:
      drawLineall(darkk, lienzoo, x, y, x - move, y);
      x = x - move;
      break;
    case key.RIGHT:
      drawLineall(darkk, lienzoo, x, y, x + move, y);
      x = x + move;
      break;
    default:
      console.log("key other");
  }
}

var route = window.location;
console.log(route);

//. form.innerHTML = ´<h2>${user}</h2>´;
//. let form = document.getElementById('bform');
///. condicionales
//if(edad > 40){
//   console.log('eres un adulto');
//}else if{edad > 18){
//   console.log('eres mayor de edad');
//}else{
//   console.log('eres menor de edad')
// }
///. bucles
//for(let n = 0; n <= 9; n++){
//   console.log(n);
//   edad.innerHTML += ´<p>script en html</p>´;
//   addEdad(´<p>script en html</p>´);
//}
///. funciones
// addEdad(´<h2>${user}</h2>´);
//
// function addEdad(newEdad){
//   console.log(newEdad);
//   edad.innerHTML += newEdad;
//}
///. arrays
// let edades = [10, 100, 1000, 10000];
// console.log(edades.length);
//
// var user = prompt('¿Cúal es tu nombre?');
// var resp = confirm('Interesante \n ¿Tu nombre completo es '+ usuario +' ?')
// alert(`¡que tal tiempo ${usuario}!`);
