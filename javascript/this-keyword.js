var comments = {},
comments.data = ["Good Job", "Bye", "Lame"];

//Not a method
function print(arr) {
  arr.forEach(function(el) {
    console.log(el);
  });
}

print(comments.data);

//this refers to object.comments
comments.print = function() {
  this.data.forEach(function(el) {
    console.log(el);
  });
}
