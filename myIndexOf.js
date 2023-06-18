function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    let animal = array[i];
    if (array[i] == target) {
      return i;
    }
  }
  return -1;
}

let animals = [
  "Bear",
  "Cat",
  "Hippo",
  "Rat",
  "Dog",
  "Cow",
  "Something",
  "Something",
  "Something",
  "Something",
  "Something",
  "Something",
  "Lion",
];

console.log(myIndexOf(animals, 'Lion'));
