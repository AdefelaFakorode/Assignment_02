function isGreaterThreshold(value) {
  return value > 5;
}

function myEvery(array, callback) {
  newList = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    newList.push(callback(number));
  }
  return newList;
}

let array = [20, 40];
console.log(myEvery(array, isGreaterThreshold));
