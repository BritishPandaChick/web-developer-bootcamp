//push()
var colors = ["red", "orange", "yellow"];
//colors[3] = "green";
colors.push("green");
//["red", "orange", "yellow", "green"]
colors[4] = "blue";
colors.push("indigo"); //6
colors // red, orange, yellow, green, blue, indigo
colors.push("violet"); //7

//pop()
colors.pop(); //red, orange
//pop() returns the removed element
var col = colors.pop(); //orange
colors.pop(); //violet
colors //red, orange, green, blue, indigo

//unshift()
colors.unshift("infrared"); // infrared, red, orange, yellow
var nums [34, 54, 22];
nums.unshift("Hello");
nums //["Hello", 34, 54, 22]

//shift()
colors.shift(); //orange, yellow
//shift() alsore returns the removed element
var col = colors.shift(); //orange
nums.shift();
nums //[34, 54, 22]

//indexOf
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];
//returns the first index at which given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4
//returns -1 if the element is not present
friends.indexOf("Hagrid"); //-1

var colors = ["red", "orange", "yellow"];
colors.indexOf("yellow"); //2
colors[2] //yellow
colors.indexOf("green") //-1

//slice()
var fruits = ["Banana", "orange", "lemon", "apple", "mango"];
//use slice to copy the 2nd and 3rd fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1,3);
/* this does not alter the original fruits array.
citrust contains ["orange", "lemon"]
fruits contains ["banana", "orange", "lemon", "apple", "mango"] */
var nums = [1, 2, 3, "a", "b", 445, 34];
nums
var letters = nums.slice(3,5);

//You can also use slice to copy an entire array
var nums = [1, 2, 3];
var otherNums = nums.slice();
//both arrays are [1, 2, 3]
