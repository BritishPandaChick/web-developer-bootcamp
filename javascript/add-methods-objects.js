var obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function(x,y) {
    return x + y;
  }
}

obj.add(10, 5); //15

//Name space collisons
function speak() {
  return "WOOF";
}
speak(); //WOOF

function speak() {
  return "Meow";
}
speak(); //Meow

//How to avoid name space collisons
var dogSpace = {};
dogSpace.speak = function() {
  return "Woof!";
}
dogSpace.speak(); //Woof

var catSpace = {};
catSpace.speak = function() {
  return "Meow";
}
catSpace.speak(); //Meow
