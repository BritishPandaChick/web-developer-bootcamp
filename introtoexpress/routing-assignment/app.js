var express = require("express");
var app = express();
var port = 3000;

// visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

// visiting "/speak/pig" should pring "The pig says 'Oink'"
app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal;
  var sound = "";
  if (animal === "pig") {
    sound = "Oink";
  } else if (animal === "cow") {
    // visiting "/speak/cow" should print "The cow says 'Moo'"
    sound = "Moo";
  } else {
    sound = "Woof!"
  }
  res.send("The " + animal + " says " + sound);
});

//can also do as the following
// visiting "/speak/dog" should print "The dog says 'Woof!'"
app.get("/speak/:animal", function(req, res){
  var sounds = {
      pig: "Oink",
      cow: "Moo",
      dog: "Woof",
      cat: "I hate you human",
      goldfish: "..."
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");

});

// visiting "/repeat/hello/3" should print "hello hello hello"
// visiting "/repeat/hello/5" should print "hello hello hello hello hello"
//visiting "/repeat/blah/2" should print "blah blah"
app.get("/repeat/:message/:times", function(req, res){
  var message = req.params.messages;
  var times = Number(req.params.times);
  var result = "";

  for (var i=0; i < times; i++){
    result += message + " ";
  }
  res.send(result);
});

//any other route prints "Sorry, page not found ...What are you doing with your life?"
app.get("*", function(req, res){
  res.send("Sorry, page not found ... What are you doing with your life?");
});

// Tell Express to listen for requests (start server)
/* app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server has started!");
}); */

app.listen(port, () => console.log("Server has started!"));
