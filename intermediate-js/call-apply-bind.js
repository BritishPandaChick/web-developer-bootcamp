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

person.sayHi() // "Hi Colt"
person.determineContext() //true 

person.dog.sayHello.call(person) //"Hello Colt" 
person.dog.determineContext.call(person) //true 

//Using call worked! Notice that we do NOT invoke sayHello or determineContext 