function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function square(number) {
  console.log(number * number);
}

let arr = [1,2,3,4,5];
console.log(myEach(arr, square));
