function square(x) {
  console.log(x * x);
}

square(4); //16
"4 squared is: " + square(4); //return undefined

function square(x) {
  return x * x;
}
square(4);
console.log(4); //prints 4 and see return undefined

square(4);
"4 squared is: " + square(4); //"4 squared is: 16"
var result = square(104); //return 10816 undefined

//use return keyword to output value from a function
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//capitalize the first letter of the string
//capture return value in a variable
var city = "paris"; //"paris"
var capital = capitalize(city); //"Paris"

//return keyword stops the execution of a function
function capitalize(str) {
  if(typeof str === "number") {
    return "that's not a string";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris"; //"paris"
var capital = capitalize(city); //"Paris"

var num = 37;
var capital = capitalize(num); //"that's not a string!"

/* Function declaration vs function expression */
//function declaration
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
