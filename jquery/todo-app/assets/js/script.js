// Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

/* Check off toggle specific todos -longer code version
$("li").click(function() {
  //if li is gray
  //console.log($(this).css("color"));
  if($(this).css("color") === "rgb(128, 128, 128)") {
      //turn to black
      $(this).css({
        color: "black",
        textDecoration: "none"
      });
  } else {
    //turn to gray
    $("this").css("color", "gray");
    $("this").css("text-decoration", "line-through");
    /* $(this).css({
    color: "gray",
    textDecoration: "line-through"
  })
  }
}); */

//Click on X to delete the todo
$("ul").on("click", "span", function(event){
  alert("clicked on a span");
  //$(this).parent().remove();
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//Create new todos
$("input[type="text"]").keypress(function(event){
  if(event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
