const BLANCO = 'rgba(255, 255, 255, 1)'
//? Good practiques

var p = document.getElementById('paint');
var lienzo = p.getContext('2d');
var lineal = 21;
var i = 0;
var yi, xf;
var dark = "#111";

while(i < lineal) //while(i < lineal)
{
    yi = 10 * i;
    xf = 10 * (i + 1);
    paintLineal(dark, 0, yi, xf, 222);
    i++; // i = i + 1
}

paintLineal(dark, 1, 1, 1, 222);
paintLineal(dark, 1, 221, 221, 221);

function paintLineal(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); // * abrir lienzo
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); // * cerrar lienzo
}

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

var ruta = window.location;
console.log(ruta)