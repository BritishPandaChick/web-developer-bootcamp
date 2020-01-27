/* Very commonly lose the context of 'this', but in functions we do not want to execute right away! */
var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }, 1000)
    }
}

colt.sayHi() // Hi undefined (1000 milliseconds later)

/* Use bind to set the correct context of 'this' */
var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName)
        }.bind(this), 1000)
    }
}