//Print all numbers between -10 and 19
for (var i = -10; i < 20; i++) {
  console.log(i);
}

//Print all even numbers between 10 and 40
for (var j = 10; j <= 40; j+=2) {
  console.log(j);
}

/* for (var j = 10; j < 41; j+=2) {
  if (j % 2 === 0) {
    console.log(j);
  }
} */

//Print all odd numbers between 300 and 333
for (var x = 300; x <= 333; x+=2) {
  if (x % 2 !== 0) {
    console.log(x);
  }
}

//Print all numbers divisible by 5 and 3 between 5 and 50
for (var y = 5; y <= 50; y++) {
  if (y % 5 === 0 && y % 3 === 0) {
    console.log(y);
  }
}
