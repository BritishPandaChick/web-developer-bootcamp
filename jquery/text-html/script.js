/* check to see jQuery on the page
jQuery
$("h1") */

$("h1").text(); //says h1 text
$("ul").text(); //gives text content of ul

$("li"); //gives list of lis
$("li").text(); //gives all text content for li's

$("h1").text("New text!") //changes h1 text content
$("h1").text() // shows the next h1 text content

$("li").text("Rusty, Colt's dog, is adorable"); //changes each li text content

$("ul").html(); //retrieve innerHTML of ul
$("ul").html("<li>I hacked your UL</li><li>Rusty is still adorable</li>") //updates innerHTML of ul
$("li").html("<a href="www.google.com">Click me to go to Google</a>"); //updates both li's to reflect new content
$("li").text("<a href="www.google.com">Click me to go to Google</a>"); //only shows the text
