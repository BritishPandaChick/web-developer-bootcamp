function square(num) {
  console.log(num * num);
}

square(10); //prints 100
square(3); //prings 9
square(4); //prints 16

function sayHello() {
  console.log("Hello there!");
}

sayHello();

function sayHelloName(name) {
  console.log("Hello there " + name + " !");
}

sayHelloName("Rusty");
sayHelloName("Charlie");
sayHelloName("Mary");

//functions can have many arguments as needed
function area(length, width) {
  console.log(length * width);
}

area(9,2); //18

function greet(person1, person2, person3) {
  console.log("hi " + person1);
  console.log("hi " + person2);
  console.log("hi " + person3);
}
greet("Harry", "Ron", "Hermione");
greet("Harry", "Ron") //Leaves third person as undefined
