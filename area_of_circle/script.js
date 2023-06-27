var radius = document.getElementById("radius");
var area = document.getElementById("area");
var circumference = document.getElementById("circumference");
var calculate = document.getElementById("calculate");

function calculateArea() {
  console.log(radius.value);
  var a = Math.PI * (radius.value * radius.value);
  var circle = Math.PI * (radius.value * 2);
  area.innerHTML = "The Area is: " + Math.round(a);
  circumference.innerHTML = "The circumference is: " + Math.round(circle);
}
