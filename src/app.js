import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function GeneradorExcusas() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
 
let randomwhois = who[Math.floor(Math.random() * who.length)];
let randomactions = action[Math.floor(Math.random() * action.length)];
let randomwhatis = what[Math.floor(Math.random() * what.length)];
let randomwhenis = when[Math.floor(Math.random() * when.length)];

let excusas= `${randomwhois} ${randomactions} ${randomwhatis} ${randomwhenis}`

document.getElementById("excusas").innerHTML= excusas;

console.log( randomwhois, randomactions, randomwhatis, randomwhenis );

};
