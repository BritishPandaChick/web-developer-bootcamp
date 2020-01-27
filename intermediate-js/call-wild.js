var colt = {
    firstName: "Colt",
    sayHi: function() {
        return "Hi " + this.firstName
    }
}

var elie = {
    firstName: "Elie",
    // Look at all this duplication
    sayHi: function() {
        return "Hi " + this.firstName
    }
}

colt.sayHi() // Hi Colt
elie.sayHi() //Hi Elie

/* How can we refactor the duplication using call? 
How can we "borrow" the sayHi function from colt and
set the value of 'this' to be elie? */
var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName
    }
}

var elie = {
    firstName: "Elie"
}

colt.sayHi() //Hi Colt 
colt.sayHi().call(elie) //Hi Elie 