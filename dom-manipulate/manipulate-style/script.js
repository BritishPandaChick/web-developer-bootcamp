//Select
var tag = document.getElementById("highlight");

//Manipulate
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

var h1 = document.querySelector("h1")
h1.style //shows object with style
h1.style.color = "yellow"; //change yellow
h1.style.border = "5px solid pink"; //change border color

var tag = document.getElementById("highlight");
//Add new class to selected element
tag.classList.add("some-class")
/* Do this instead of
tag.style.color = "blue";
tag.style.border = "10px solid red"; */

var tag = document.querySelector("h1");

//Add class to selected element
tag.classList.add("another-class");

//Remove a class
tag.classList.remove("another-class");

//toggle a class
tag.classList.toggle("another-class");

var p = document.querySelector("p");
p //shows p tag
p.classList // [] no classLists are assigned yet
p.classList.add("big");
p.classList.remove("big");
p.classList.toggle("big"); //false
p.classList.toggle("big"); //true
p.classList.toggle("big"); //false 
