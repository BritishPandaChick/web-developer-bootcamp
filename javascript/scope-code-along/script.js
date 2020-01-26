function doMath() {
  var x =40;
  console.log(x);
}

doMath(); //40
x //get error saying x is undefined

var x = "hello";
x //"hello"
doMath(); //40
clear();
/*
var y = 99;
y // 99
function doMoreMath() {
  console.log(y);
}
doMoreMath(); //99 */

function doMoreMath() {
  y=100;
  console.log(y);
}
y //99
doMoreMath(); //100
y //100
clear();

var phrase = "hi there!";
function doSomething() {
  var phrase = "Goodbye!";
  console.log(phrase);
}
doSomething(); //Goobye!
phrase //hi there!

/* Scope Quiz */
//Exercise One
var num = 8;
function doMath() {
  num+=1;
  if (num % 5 == 0) {
    return true;
  } else {
    return false
  }
}

num += 1;
doMath(); //true

//Exercise two
function hi() {
  var name = "Rusty";
  console.log(name);
}

function bye() {
  console.log(name);
}

hi(); //Rusty
bye(); //undefined
