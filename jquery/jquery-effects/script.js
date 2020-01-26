$("div").fadeOut(); //fade out the div

$("button").on("click", function() {
  $("div").fadeOut(1000, function(){
    console.log("Fade Completed!");
  });
});

$("button").on("click", function() {
  $("div").fadeOut(1000, function(){
    $(this).remove(); //remove fadeOut once it finishe once it is clicked
  });
  $("div").remove(); //run remove immediately after fadeOut finishes
});

$("button").on("click", function() {
  $("div").fadeOut(1000, function(){
    //$(this).remove(); remove fadeOut once it finishe once it is clicked
  });
  $("div").remove(); //run remove immediately after fadeOut finishes
});

$("button").on("click", function() {
  $("div").fadeIn(1000);
}); //fade in a second

$("button").on("click", function() {
  $("div").fadeToggle(500);
}); //fade in when toggled. fade out when toggled.

$("button").on("click", function() {
  $("div").slideDown();
}); //height animated down.

$("button").on("click", function() {
  $("div").slideUp();
}); //height moves up

$("button").on("click", function() {
  $("div").slideToggle(1000, function() {
    console.log("Slide is done!");
    $(this).remove(); //remove from the page 
  });
}); //decides what slide. Goes up and down when toggled
