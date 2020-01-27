function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    //set properties on keyword this that are preset values 
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}

//Use call + apply 
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    //using call 
    Car.call(this, make, model, year)
    this.numWheels = 2;
}

function Motorcycle(make, model, year){
    //using apply 
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcycle(make, model, year){
    //using apply with arguments 
    Car.apply(this, arguments);
    this.numWheels = 2;
}

// Example
function listArguments(){
    return arguments;
}

listArguments(1,2,3); //[1, 2, 3]