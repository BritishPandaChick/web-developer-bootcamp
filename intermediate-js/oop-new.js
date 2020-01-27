function House(bedrooms, bathrooms, numSqft){
    this.bedroom = bedroom;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

//how to use constructor to construct objects 
var firstHouse = House(2, 2, 1000); 
firstHouse //undefined

/* not returning anything so House function returns undefined.
Not explictly binding 'this' or placing it inside a declared object = value of the keyword 'this' will be 
global object which isn't what we want */

// Use the new keyword 
var firstHouse = new House(2, 2, 1000); 
firstHouse.bedroom // 2
firstHouse.bathroom // 2
firstHouse.numSqft // 1000

/* new keyword does the following:
- creates an empty object 
- sets the keyword 'this' to be that empty object 
- adds 'return this' to the end of the function which follows it
- adds property onto the empty object called '_proto_", which links the prototype property on the constructor function to 
the empty object  */

// Example 
function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " just barked!");
    }
}

var rusty = new Dog ('Rusty', 3);
var fido = new Dog ('Fido', 1);

rusty.bark() // Rusty just barked 
fido.bark() // Fido just barked 
