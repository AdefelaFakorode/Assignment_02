function reverseArray(array) {
  let stack = [];
  let lastIndex = array.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    stack.push(array[i]);
  }
  return stack;
}
let letters = ["A", "B", "C"];
console.log(reverseArray(letters));
