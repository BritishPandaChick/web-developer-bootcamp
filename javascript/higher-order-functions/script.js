function sing() {
  console.log("Twinkle twinkle ...");
  console.log("How i wonder ...");
}

sing();
setInterval(sing, 1000); //calls inside sing 1000 milliseconds
clearInterval(2);

setInterval(function(){
  console.log("I am anonymous function!");
  console.log("This is awesome!");
}, 2000);
