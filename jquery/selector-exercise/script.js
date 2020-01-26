$("div") //show all the div tags and shows jquery is working
/* if (jQuery) {
  alert("jQuery loaded")
} else {
  alert("No jQuery :(")
}
use to run to see if jQuery works */

//select all divs and give purple background
$("div").css("background", "purple");

//select the divs with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px");

//select the div with id "third" and give it an orange border
$("#third").css("border", "1px dashed orange");

//Select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");
//$("div:first").css("color", "pink"); can also be used but slower. Use first of type instead.
