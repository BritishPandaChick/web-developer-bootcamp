var friends = ["Charlie", "Liz", "David", "Mattias"];
console.log(friends[0]); //Charlie
friends[1] + " <3" + friends[2] //"Liz <3 David"

//Update arrays
friends[0] = "Chuck";
friends[1] = "Lizzie";

//Add data to existing array
friends[4] = "Amelie";

var colors = ["red", "orange", "yellow"];
colors // ["red", "orange", "yellow"]
colors[1] //"orange"
colors[3] = "green";
colors // ["red", "orange", "yellow", "green"]
colors[3] = "dark green"; //"dark green"
colors[10] = "violet"; //violet
colors //["red", "orange", "yellow", "dark green", undefined x 6, "violet"]

//can initalize empty array two ways
var friends = []; //no friends
var friends = new Array() //uncommon

//arrays can hold any type of data
var random_collection = [49, true, "Hermoine", null];

//arrays have a length property
var nums = [45, 37, 89, 24];
nums.length //4

var dogs = ["Rusty", "Wyatt", "Olly"];
dogs.length //3
dogs[2] //Olly

var name = "Rusty"
name.length //5
name[4] //y
