//Print all numbers between -10 and 19
var num = -10;
while (num < 20) {
  console.log(num);
  num++;
}

//Print all even numbers between 10 and 40
var numTwo = 10;
while (numTwo < 41) {
  console.log(numTwo);
  numTwo += 2;
}

/* while(counter <= 40) {
    if (counter % 2 === 0) {
    console.log(counter);
  }
  counter+=1;
}

This will print out all the even numbers and check if they are all evens*/

//Print all odd numbers between 300 and 333
var numThree = 300;
while (numThree <= 333) {
  if(numThree % 2 !== 0) {
    console.log(numThree);
  }
  numThree += 1;
}

//Print all numbers divisible by 5 and 3 between 5 and 50
var numFour = 5;
while (numFour <= 50) {
  if (numFour % 5 === 0 && numThree % 3 === 0) {
    console.log(numFour);
  }
  numFour++;
}
