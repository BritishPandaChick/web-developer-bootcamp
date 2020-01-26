//prints when item with id 'submit' is clicked
$("#submit").click(function() {
  console.log("Another click");
});

//alert when any button is clicked
$("button").click(function() {
  alert("Someone clicked a button");
});

$("h1") //gives h1 tag
$("h1").click(function(){
  alert("h1 clicked!");
}); //click on h1 and says h1 is clicked

$("button") //show all button tags
$("button").click(function(){
  alert("button clicked");
  $(this).css("background", "pink");
  var text = $(this).text();
  console.log("You clicked " + text); //will show button text when clicked
}); //click on button will say button clicked alert
