function Zoo(animal) {
  if (animal == "Lion") {
    return true;
  }
}

function myIndexOf(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let animal = array[i];
    if (callback(animal)) {
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

console.log(myIndexOf(animals, Zoo));
