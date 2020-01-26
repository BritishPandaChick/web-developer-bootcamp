//isEven()
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEven(4); //true
isEven(21); //false
isEven(68); //true
isEven(333); //false

/*
function isEven(num) {
  return num % 2 === 0;
}

isEven(4); //true
isEven(21); //false
isEven(68); //true
isEven(333); //false */

//factorial()
function factorial(num) {
  /* if (num===0) {
    return 1;
  } */
  //define result variable
  var result = 1;
  //calculate factorial and store value in result
  for (var i=2; i <= num; i++) {
    result *= i;
  }
  //return result variable
  return result;
}

/* function factorial(num) {
  //define result variable
  var result = 1;
  //calculate factorial and store value in result
  for (var i= num-1; i >=1; i--) {
    result *= i;
  }
  //return result variable
  return result;
} */

factorial(5); //120
factorial(2); //2
factorial(10); //3628
factorial(0); //1

//kebabToSnake()
function kebabtoSnake(str) {
  //replace all '-' with "_"'s
  var newStr = str.replace(/-/g, "_");
  //return str
  return newStr;
}

kebabToSnake("hello-world"); //hello_world
kebabToSnake("dogs-are-awesome"); //dogs_are_awesome
kebabToSnake("blah"); //blah
