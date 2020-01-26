//Could use an array
var person = ["Cindy", 32, "Missoula"];
//to retrieve
person[2]
//what if i accidentally reversed the order?
var person2 = ["Travis", "Los Angeles", 21];

/* Perfect case for object */
var person = {
  name: "Cindy",
  age: 32,
  city: "Missoula"
};

var person = {
  name: "Travis",
  age: 21,
  city: "LA"
};

//bracket notation similar to arrays
console.log(person["name"]);
//dot notation
console.log(person.name);

var dog = {
  name: "Rusty",
  breed: "Mutt",
  age: 3
}
dog //Object {name: "Rusty", breed: "Mutt", age: 3}
dog["age"] //3
dog.age //3

//cannot use dot notation if property starts with a number
someObject.1blah //invalid
someObject["1blah"] //valid

//can lookup using variable with bracket notation
var str = "name";
someObject.str //doesn't look for name
someObject[str] //does evaluate str and look for name

//can't use dot notation for property names with spaces
someObject.fav color //invalid
someObject["fav color"]; //valid

//update age in object
person["age"] += 1;
//update city
person.city = "London";

dog.age = 4; //4
dog.age += 1; //5
dog["name"] //Rusty
dog["name"] = "Tater" //Tater

//make an empty object and add to it
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";

//All at once
var person = {
  name: "Travis",
  age: 21,
  city: "LA"
};

//another way of initializing an object
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

var junkObject = {
  age: 57,
  color: "purple",
  isHungry: true,
  friends: ["Horatio", "Hamlet"],
  pet: {
    name: "Rusty",
    species: "Dog",
    age: 2
  }
};
