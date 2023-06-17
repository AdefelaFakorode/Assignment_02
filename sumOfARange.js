/*
The introduction of this book alluded to the following 
as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start 
and end, and returns an array containing all the numbers 
from start up to (and including) end.

Next, write a sum function that takes an array of numbers 
and returns the sum of these numbers. Run the example 
program and see whether it does indeed return 55.
*/

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
