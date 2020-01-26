//&& and
x < 10 && x !== 5 //false

// || or
y > 9 || x === 5 //return true

// ! Not
!(x===y) // true

//Exercise 1
var x = 10;
var y = "a"

y === "b" || x >= 10 //true

//Exercise 2
var x = 3;
var y = 8;

!(x == "3" || x === y) && !(y != 8 && x <= y) //false

//Truthy or Falsy values
!"Hello World" //false
!!"Hello" //true
!"" //false
!null //false
!0 //false
!-1 //true
!NaN //false

/* Falsy favlues are:
false, 0, "", null, undefined, and NaN
Everything else is truthy */

//Exercise 3
var str = ""
var msg = "haha!"
var isFunny = "false"

!((str || msg) && isFunny); //false
