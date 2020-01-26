//prints when item with id 'submit' is clicked
$('#submit').on('click', function() {
  console.log("Another click");
});

//alert when any button is cliked
$('button').on('click', function() {
  console.log("button clicked!");
});

//double click events
$('button').on('dbclick', function(){
  alert("Double clicked");
});

//drag start event
$('a').on('dragstart', function() {
  console.log("Drag started");
});

//keypress event
$('input[type="text"]').on('keypress', function() {
  alert("key press in an input!");
});

$("h1").on("click", function(){
  $("h1").css("color", "purple"); //turns all h1 purple
  $(this).css("color", "purple"); //only one clicked turns purple
});

$("input").on("keypress", function() {
  console.log("Keypressed!")
}); //shows keypressed when typing in the input

$("button").on("mouseenter", function() {
  console.log("Mouse enter!"); //hover over get mouse enter
  $(this).css("font-weight", "bold");
}); //changes button to bold when hover over

$("button").on("mouseleave", function(){
  $(this).css("font-weight", "normal");
}); //goes back to normal when stop hovering over button 
