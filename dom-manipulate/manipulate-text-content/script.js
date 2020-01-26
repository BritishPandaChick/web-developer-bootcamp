//select p tag
var tag = document.querySelector("p");

//Retrieve the textContent
tag.textContent // This is an awesome paragraph

//Alter the textContent:
tag.textContent = "blah blah blah";

var p = document.getElementByTagName("p")[0];
p //get first paragraph
p.textContent //Corgi mixes are super adorable
var ul = document.querySelector("ul");
ul //show ul tags
ul.textContent //shows all text content inside ul tag
p.textContent = "Corgi mixes are really really super adorable"; //overwrites the strong tag

//select the p tag
var tag = document.querySelector("p");
tag.innerHTML //This is a <strong>awesome</strong> paragraph

var ul = document.querySelector("ul");
ul.innerHTML //shows inside the ul tags
ul.innerHTML = "Plants are awesome"; //overwrites content

document.querySelector("h1").textContent = "End of this lesson" //changes h1 text content

document.body.innerHTML //get all HTML for the body
document.body.textContent //get all text on page
document.body.textContent = "<h1>Goodbye!</h1"; //treats at text. doesn't render h1 tag.
document.body.innerHTML = "<h1>Goodbye!</h1>" //renders as an h1
