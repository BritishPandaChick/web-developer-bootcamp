$("img").css("width") //shows the width of the image
$("img").css("width", "500px"); //changes width to 500px;
$("img").css("width", "200px"); //changes width to 200px;
$("img").attr("src"); //retrieves the src link
$("img").attr("src", "https://i.pinimg.com/originals/93/fa/c0/93fac00692c54e9df0327528967f4741.jpg");
//changes src link

$("input") //shows input tag
$("input").attr("type"); //says type is text
$("input").attr("type", "color"); //change to color attribute
$("input").attr("type", "checkbox"); //change to textbox

$("img").css("width", "200px"); //change image width to 200px
$("img:first-of-type") //show first image
//can also use img:first but will be slower
$("img:first-of-type").attr("src", "https://i.pinimg.com/originals/93/fa/c0/93fac00692c54e9df0327528967f4741.jpg"); //change first image only
$("img").last() //return last element of given selector
$("img").last().attr("src", "https://i.pinimg.com/originals/93/fa/c0/93fac00692c54e9df0327528967f4741.jpg"); //changes the last image
$("img").attr("src", "https://i.dailymail.co.uk/i/pix/2014/03/03/video-undefined-1BFF1E3600000578-538_636x358.jpg"); //change all images

$("input").val(); //gives empty string
$("input").val(); //gives name if name is typed in input bar
$("input").val(); //gives you random letters if letters typed in input bar
$("input").val("Rusty Steele"); //updates Rusty Steele in the input
$("input").val(""); //erases input once submitted

$("select") //gives select tag
$("select").val(); //should say toad if option toad selected
