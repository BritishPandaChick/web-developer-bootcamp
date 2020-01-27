// Strict Mode 
/* When we enable strict mode and we are not inside a declared object */
"use strict"

console.log(this); //window 

function whatIsThis(){
    return this
}

function variablesInThis() {
    // since we are in strict mode this is undefined 
    // so what happens if we add a property on undefined? 
    // let's see what happens when we call the function ..
    this.person = "Elie";
}

variablesInThis() //TypeError, can't set person on undefined 

whatIsThis() //undefined