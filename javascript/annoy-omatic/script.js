//alert("connected!");
var answer = prompt("Are we there yet?");

while (answer !== "yes" || answer !== "yeah") {
  var answer = prompt("Are we there yet??");
}

alert("Yay, we made it!");

//Version Two
var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet??");
}

alert("Yay, we made it!");
