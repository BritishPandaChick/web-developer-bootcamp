function Person(name){
    this.name = name;
    this.sayHi = function(){
        return "Hi " + this.name;
    }
}

elie = new Person("Elie");
elie.sayHi(); //Hi Elie

/* inefficient code. every time we make an object using the new keyword we have to redefine this function but same name for everyone. */

//Use a prototype 
function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi(); //Hi Elie

//Example 
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning){
        return "beep";
    }
}
