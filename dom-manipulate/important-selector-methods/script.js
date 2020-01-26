document.URL; //url of page on
document.head; //shows the head of the page
document.body; //shows entire body of page
document.links; // all a tags on page

//document.getElementById()
var tag = document.getElementById("highlight");
tag //gives first li
console.dir(tag) // shows all the properties of what selected. object representation

//document.getElementByClassName()
var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);

tags[0] //shows all tags that have class name bolded
tags.length //2
tags.forEach() //get typeError. This is not an array
console.dir(tags[0]) //show object with tons of properties

//document.getElementsByTagName()
var tags = document.getElementsByTagName("li");
console.log(tags[0]);
tags //shows all the lists with tag names.
console.dir(tags[0]) //show object with properties

var tags = document.getElementByTagName("h1");
console.log(tags[0]);
tags //show h1 tags

var tags = document.getElementsByTagName("body");
tags //show entire body tag elements

var tags = document.getElementsByTagName("head");
tags //show entire head of document.

//document.querySelector()
//select the ID
var tag = document.querySelector("#highlight");

//select class
var tag = document.querySelector(".bolded");

//select by tag name
var tag = document.querySelector("h1");

var h1 = document.querySelector("h1");
h1 //shows h1 tags
var li = document.querySelector("#highlight");
li //shows first li with highlight id
var li = document.querySelector(".bolded");
li //shows li with bolded class
var li = document.querySelector("li a.special");
li //won't return any matches but is valid to use

//document.querySelectorAll()
var tags = document.querySelectorAll("h1");
var tags = document.querySelectorAll(".bolded");

var lis = document.querySelectorAll("li");
lis //shows all the lis object
var lis = document.querySelector("li");
lis //only shows the first li item

var bolded = document.querySelector(".bolded");
bolded //shows li class with bolded
var bolded = document.querySelectorAll(".bolded");
bolded //shows two li classes with bolded

var li = document.querySelectorAll("#highlight")
li //shows li object. Can also be used.
