//DRY: Don't Repeat Yourself!

//While Loop
var count = 1;
while(count < 6) {
  console.log("count is: " + count);
  count++;
}

var str = "hello";
var count = 0;

while(count < str.length) {
  console.log(str[count]);
  count++;
}

//Creates an infinite loop
/* var count = 0;
while(count < 10) {
  console.log(count);
} */

//Exercise one
var num = 1;
while (num <= 10) {
  console.log(num);
  num += 2;
}
// prints out odd numbers

//Exercise two
var num = 1;
while(num <= 20) {
  if(num % 4 === 0) {
    console.log(num);
  }
  num++;
}
//prints out multiples of 4 between 1 and 20

//Exercise three
var num = 100;
while(num < 150) {
  console.log(num + 1);
  num--;
}
//prints an infinite loop
