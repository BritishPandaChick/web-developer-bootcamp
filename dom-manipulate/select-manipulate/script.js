var h1 = document.querySelector("h1");
h1.style.color = "pink";

var body = document.querySelector("body"); //Select
var isBlue = false;

setInterval(function() { //Manipulate
  if(isBlue) {
    body.style.background = "white";
  } else {
    body.style.background = "#3498db";
  }
  isBlue = !isBlue;
}, 1000);
