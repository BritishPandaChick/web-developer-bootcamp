//listen for any keypress in any text input
$('input[type="text"]').keypress(function() {
  alert("text input keypress!");
});

$("input[type="text"]").keypress(function() {
  console.log("You pressed a key");
});
//can also use $("input")

$("input").keypress(function(event) {
  console.log(event) //console log event every time
  if (event.which === 13) {
    alert("You hit enter");
  } //alerts when pressed enter
});
