function outer(){
    var data = "closures are ";
    return function inner(){
        var innerData = "awesome";
        return data + innerData;
    }
}

outer(); 
/* returns function inner(){
    var innerData = "awesome";
    return data + innerData;
} */

outer()(); // "closures are awesome"

//Our first closure 
function outer(a){
    return function inner(b){
        /* inner function is making use of the variable 'a
        which was defined in an outer function called "outer"
        and by the time this is called, that outer function has returned 
        this function called "inner" is a closure: */
        return a + b;
    }
}

outer(5)(5) // 10 

var storeOuter = outer(5);
storeOuter(10) //15 

//Is this a closure?
function outerFn(){
    var data = "something from outer";
    return function innerFn(){
        return "Just returned from the inner function";
    }
}  //Not a closure

function outerFn() {
    var data = "something from outer"
    return function innerFn(){
        var innerData = "something from inner"
        return data + " " + innerData;
    }
} // Is a closure

//Private variables 
function counter(){
    var count = 0;
    return function(){
        return ++count
    }
}

counter1 = counter()
counter1() //1
counter1() //2

counter2 = counter()
counter2() //1
counter2() //2

counter1() //3 this is not affected by the counter 
count //ReferenceError: count is not defined - because it is private!

//More privacy 
function classRoom(){
    var instructors = ["Colt", "Elie"];
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classroom()
course1.getInstructors() // ["Elie", "Colt"]
course1.addInstructor("Ian") // ["Elie", "Colt", "Ian"]
course1.getInstructors() // ["Elie", "Colt", "Ian"]

course2 = classRoom()
course2.getInstructors() // ["Elie", "Colt"] - not affected by course1 

/* we also have NO access to the instructors variable which make it private - no one can modify it ... you're stuck with Colt and Elie */