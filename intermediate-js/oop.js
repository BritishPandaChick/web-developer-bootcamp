//constructor function = blueprint for what each house should be 
//Capitalization of function name convention
//attaching properties onto the 'this'
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
