var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//forEach
arr.forEach(someFunction)

var colors = ["red", "orange", "yellow", "green"];
colors.forEach(function(color) {
  //color is placeholder, call it whatever you want
  console.log(color);
});

colors.forEach(function(iLoveDogs) {
  console.log("Inside the FOREACH" + iLoveDogs); //print Inside the FOREACH red
  alert("Inside the FOREACH");
}); //repeat code 4 times

function printColor(color) {
  console.log("********");
  console.log(color);
  console.log("********");
}
printColor("purple"); //print stars with color between
colors.forEach(printColor); //print colors between the stars.

//with a for loop
var colors = ["red", "orange", "yellow", "green"];

for (var i=0; i < colors.length; i++) {
  console.log(colors[i]);
}

//suing a forEach
var colors = ["red", "orange", "yellow", "green"];
colors.forEach(function(color) {
  console.log(color);
});

//using a while loop
var count = 0;
while(count < colors.length) {
  console.log(colors[count]);
  count++;
}
