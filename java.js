var myVar = setInterval(myTimer, 1000);
var n ;
function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  n = d.getHours();
  document.getElementById("demo").innerHTML = t;
  console.log(n)
  var x = document.body;
  if ( n === 0) { x.style.backgroundColor = "#21150E"}
  if ( n === 1) { x.style.backgroundColor = "#3B281D"}
  if ( n === 2) { x.style.backgroundColor = "#4C382D"}
  if ( n === 3) { x.style.backgroundColor = "#5F483C"}
  if ( n === 4) { x.style.backgroundColor = "#6E594D"}
  if ( n === 5) { x.style.backgroundColor = "#806C60"}
  if ( n === 6) { x.style.backgroundColor = "#9F8F85"}
  if ( n === 7) { x.style.backgroundColor = "#FCF4CE"}
  if ( n === 8) { x.style.backgroundColor = "#F8EEBC"}
  if ( n === 9) { x.style.backgroundColor = "#F4E8A6"}
  if ( n === 10) { x.style.backgroundColor = "#EADEA0"}
  if ( n === 11) { x.style.backgroundColor = "#DFD395"}
  if ( n === 12) { x.style.backgroundColor = "#D8CB87"}
  if ( n === 13) { x.style.backgroundColor = "#D0C380"}
  if ( n === 14) { x.style.backgroundColor = "#CABD7A"}
  if ( n === 15) { x.style.backgroundColor = "#BEB275"}
  if ( n === 16) { x.style.backgroundColor = "#B8AC6F"}
  if ( n === 17) { x.style.backgroundColor = "#B0A467"}
  if ( n === 18) { x.style.backgroundColor = "#A69A60"}
  if ( n === 19) { x.style.backgroundColor = "#998E56"}
  if ( n === 20) { x.style.backgroundColor = "#806C60"}
  if ( n === 21) { x.style.backgroundColor = "#6F594D"}
  if ( n === 22) { x.style.backgroundColor = "#5F483C"}
  if ( n === 23) { x.style.backgroundColor = "#4D382D"}
}
  // do something }

document.addEventListener('mousemove', e => {
if ( n === 0 || n === 1 || n === 2 || n === 3 || n === 4 || n === 20 || n === 21 || n === 22 || n === 23) {
  mousex = e.clientX;
  mousey = e.clientY;
  light = document.getElementById("spotlight");
  light.style.top = (mousey - 125) + "px";
  light.style.left = (mousex - 125) + "px";
  console.log(mousex,mousey);
}

})

// if ( n === 5 || n === 6 || n === 7 || n === 8 || n === 9 || n === 10 || n === 11 || n === 12 || n === 13 || n === 14 || n === 15 || n === 16 || n === 17 || n === 18 || n === 19 ||) {
//   off = document.getElementById("off");
  
// }
//   // mousex = e.clientX;
//   // mousey = e.clientY;
  // off = document.getElementById("off");
  // off.style.top = (mousey - 125) + "px";
  // off.style.left = (mousex - 125) + "px";

