//create secret number
var secretNumber = 4;

//ask user for Guess
var guess = prompt("Guess a number");
/* var stringGuess = prompt("Guess a number");
var guess=Number(stringGuess); */
alert(guess);

//check guess
if (Number(guess) === secretNumber) {
  alert("You got it right!");
} else if (Number(guess) > secretNumber){
  alert("Your number is too high");
} else {
  alert("Your number is too low");
}
