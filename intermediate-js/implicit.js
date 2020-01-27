//Implicit/Object
/* When the keyword 'this' IS inside of an declared object */

// strict mode does NOt make a difference here 
var person = {
    firstName: "Elie",
    sayHi: function() {
        return "Hi" + this.firstName;
    },
    determineContext: function() {
        return this === person;
    }
}

person.sayHi() //"Hi Elie"
person.determineContext() //true

//Nested objects 
var person = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }
    }
}

person.sayHi() //"Hi Colt"
person.determineContext() //true 

//what is value of the keyword this right now?
person.dog.sayHello() //"Hello undefined"
person.dog.determineContext() //false