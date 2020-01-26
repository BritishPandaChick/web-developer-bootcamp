/* element.addEventListener(type, functionToCall); */
var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("Someone clicked the button!");
});

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//Setup Click Listener
button.addEventListener("click", function() {
  paragraph.textContent = "Someone clicked the button";
});

var h1 = document.querySelector("h1");
h1 //selects h1 tag
h1.addEventListener("click", function() {
  alert("h1 was clicked");
}); //click h1 and says h1 is clicked

h1.addEventListener("click", function() {
  h1.style.background = "orange";
}); //click says h1 has been clicked, then turns orange. Shows can have two addEventList events

document.querySelector("ul").addEventListener("click", function() {
  console.log("You clicked the ul"); //any click on ul shows on console.log - shows number count
});

var lis = document.querySelectorAll("li");
lis //shows li tags
for (var i=0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    this.style.color = "pink";
  });
} //click on li and changes item to pink

/* Use to rewrite a named function */
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText() {
  paragraph.textContent = "Someone clicked the button!";
}
