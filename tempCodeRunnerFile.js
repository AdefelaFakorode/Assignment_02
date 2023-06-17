function range(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

//console.log(range(0,5));

function sum(array) {
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let summ = 0;
    summ+= number;
  }

  return summ;
}

console.log(sum([1, 2, 3, 4, 5]));
