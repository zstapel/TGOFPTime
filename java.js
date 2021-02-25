var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  var n = d.getHours();
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


// if n = 0 == #21150E
// var myVar = setInterval(setColor, 1000);
 
// function setColor() {
//   var x = document.body;
//   x.style.backgroundColor = x.style.backgroundColor == "blue" ? "pink" : "blue";
// }
 
// function stopColor() {
//   clearInterval(myVar);
// }