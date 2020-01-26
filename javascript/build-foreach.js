var colors = ["red", "orange", "yellow", "green"];
colors.forEach(function(color) {
  //color is placeholder, call it whatever you want
  console.log(color);
});

var nums = [45, 65, 77, 34];
nums.forEach(function(num) {
  console.log(num);
});

function myForEach(arr, func) {
  //loop through array
  for(var i=0; i < arr.length; i++) {
    //call func for each item in array
    func();
  }
}
var colors = ["red", "orange", "yellow"];
myForEach(colors, alert) //prints three alerts

function myForEach(arr, func) {
  //loop through array
  for(var i=0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i]);
  }
}

function(){
  conosole.log("I'm a function");
}()

myForEach(colors, function(){
  alert("Hi")
});

myForEach(colors, function(color){
  console.log(color);
}); //red, orange, yellow printed

Array.prototype.myForEach = function(funct) {
  for(var i=0; i < this.length; i++) {
    func(this[i]);
  }
}
var friends = ["charlie", "dave", "maddy", "caitlin"];
friends.myForEach(alert)
friends.myForEach(function(name) {
  console.log("I love " + name);
})
