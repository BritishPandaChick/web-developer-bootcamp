/* parameters work like call, but bind returns a functionw ith the context of 'this' bound already */
var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + " just calculated " + (a+b+c+d);
    }
}

var elie = {
    firstName: "Elie"
}

var elieCalc = colt.addNumbers.bind(elie, 1,2,3,4) //function(){} ...
elieCalc() //Elie just calculated 10 

//with bind - we do not need to know all the arguments up front! 
var elieCalc2 = colt.addNumbers.bind(elie,2) //function(){}...
elieCalc2(3,4)

//Example
setTimeout(function(){
    console.log("hello world");
}, 2000); //67 

var awesome = "yup!"; //undefined 
"awesome times" //"awesome times!"