var logo = document.querySelector("#hplogo");
logo //shows img tag with attributes

logo.setAttribute("src", "http://www.thatcutesite.com/uploads/2011/06/cute_corgi_mixes.jpg");
logo.style.width = "500px";
logo.style.width = "1000px";
logo.style.height = "500px";
logo.style.height = "100px";
logo.style.width = "200px";
logo.style.border = "2px solid purple";

var links = document.getElementsByTagName("a");
links //shows all links on the page
links.setAttribute() //get typeError. Doesn't exist on individual elements
for (var i=0; i < links.length; i++) {
  console.log(links[i].textContent);
}

for (var i=0; i < links.length; i++) {
  links[i].style.background = "pink";
} //links have a pink background

for (var i=0; i < links.length; i++) {
  links[i].style.border = "1px dashed purple";
  links[i].style.color = "orange";
} //pink background with orange links

for (var i=0; i < links.length; i++) {
  console.log(links[i].getAttribute("href")); //get list of all the links
  links[i].setAttribute("href", "http://www.bing.com");
} //changes href links
