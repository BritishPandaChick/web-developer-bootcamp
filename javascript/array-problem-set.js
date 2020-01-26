//printReverse()
function printReverse(arr) {
  for (var i=arr.length -1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([1,2,3,4]); //4,3,2,1
printReverse(["a", "b", "c"]); //c, b, a

//isUniform()
function isUniform(arr) {
  var firstIndex = arr[0];
  for(var j=1; j < arr.length; j++) {
    if (arr[j] !== firstIndex) {
      return false;
    }
  }
  return true;
}

isUniform([1,1,1,1]);//true
isUniform([2,1,1,1]);//false
isUniform(["a", "b", "p"]);//false
isUniform(["b", "b", "b"]);//true

//sumArray()
function sumArray(arr) {
  var total = 0;

  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

sumArray([1,2,3]); //6
sumArray([10, 3, 10, 4]); //27
sumArray([-5, 100]); //95

//max()
function max(arr) {
  var max = arr[0];
  for (var y = 1; y < arr.length; y++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

max([1,2,3]) //3
max([10, 3, 10, 4]); //10
max([-5, 100]); //100
