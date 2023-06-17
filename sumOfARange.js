function range(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

console.log(range(0, 10));

function sum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    result += number;
  }
  return result;
}

console.log(sum(range(1, 10)));
