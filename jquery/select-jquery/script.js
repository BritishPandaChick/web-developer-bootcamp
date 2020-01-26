//select all img tags
$("img")

//to select all elements with class 'sale'
$(".sale")

//to select elements with id "bonus"
$("#bonus")

//to select all a tags inside of lis
$("li a")

$ //similar to typing alert or console.log

$("h1") //return jQuery Demo h1 tag
$("li") //shows all the lis
$("body") //shows the body tags
$("a") //shows a tag
$("li a") //shows a tag
$("ul li a") //shows a tag

$("a") //shows two a tags
$("ul li a") // shows a tag with link
$("li a") //shows a tag with link inside
$("#adorable") //gives li with id adorable tag

//select elem with id "special" and give it a border
$("#special").css("border", "2px solid red");

//also pass in an object with styles
var styles = {
  backgroundColor: "pink",
  fontWeight: "bold"
};

$("#special").css(styles);

$("h1").css("color", "yellow") //changes h1 to yellow
document.querySelector("h1").style.color = "orange"; //changes h1 to orange

var styles = {
  color: "red",
  background: "pink",
  border: "2px solid purple"
}; //get styles object
$(h1).css(styles); //applies styles to h1

//select all li's and make them yellow
$("li").css("color", "yellow");

//select all elements with class "big" and give them an orange border
$(".big").css("border", "1px dashed orange");

$("li") //gives all the li's
$("li").css("color", "blue") //change all li's to blue
var lis = document.querySelectorAll("li");
for (var i=0; i < lis.length; i++) {
  lis.style.color = "green";
} //change lis to green

$("a").css("font-size", "40px"); //change all a tags to 40px font size
$("li").css({
  fontSize: "10px",
  border: "3px dashed purple",
  background: "rgba(89, 45, 20, 0.5)"
}); //applies styles to li
