//constructor function
function Person(name){
    this.name = name;
}

Person.prototype // Object {}

// object created from the Person constructor 
var elie = new Person("Elie");
var colt = new Person("Colt");

/* since we used new keyword, we have established a link between the object and the prototype property */
// access that using __proto__
elie.__proto__ == Person.prototype //true 
colt.__proto__ == Person.prototype //true

/* The Person.prototype object also has a property called constructor which points back to the function */
Person.prototype.constructor === Person; //true

Person.prototype.constructor
/* function Person(name) {
    this.name = name;
} */

