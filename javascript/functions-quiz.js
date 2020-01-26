//Exercise one
function test(x,y) {
  return y - x;
}

test(10, 40); //return 30

//Exercise two
function test(x) {
  return x*2;
  console.log(x);
  return x/2;
}

test(40); //return 80 only since ends at x*2
