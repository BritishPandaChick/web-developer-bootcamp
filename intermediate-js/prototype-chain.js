/* Prototype is shared among objects created by that constructor */
//constructor function
function Person(name){
    this.name = name;
}

// object created from the Person constructor 
var elie = new Person("Elie");
var colt = new Person("Colt");

Person.prototype.isInstructor = true;

elie.isInstructor; //true 
colt.isInstructor; //true 

//how were we able to access properties on the prototype?
//__proto__!

//Example 
var arr = [];
new Array; //[]
arr.push[10] //1
arr //[10]
console.dir(arr)
/* 0: 10
    length: 1
    ___proto: Array[0] */

arr.__proto__ === Array.prototype //true 

//Example 2
arr.hasOwnProperty('length') //true
dir(arr) // Array[1] length: 1 __proto__: Array[0]