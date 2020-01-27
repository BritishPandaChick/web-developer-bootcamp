// Global Context 
/* When 'this' is not inside of declared object */
console.log(this) //window 

function whatIsThis() {
    return this
}

function variablesInThis() {
    // Since the value of this is window 
    //all we are doing here is creating a global variable 
    this.person = "Elie"
}

console.log(person) //Elie 

whatIsThis() //window

// Examples
var person = "Sarah";
window.person // "Sarah"
window.person === person // true

var data  = {}; //undefined 
data.instructor = "Elie"; // "Elie"
data // Object { instructor: "Elie" }

var dog = "Rusty"; //have access to it everywhere
function makePerson() {
    var person = "colt"; //will not have access outside of the function
    /* omit the var keyword to get access of person outside of the function */
}

function mistake() {
    this.badIdea = "Ooops"; //global variable 
} 
