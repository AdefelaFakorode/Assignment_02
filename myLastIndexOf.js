function lastIndexOf(array, target) {
  let lastIndex = array.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    let name = array[i];
    if (array[i] == target) {
      return i;
    }
  }
  return -1;
}

let Names = [
  "Max",
  "Zach",
  "Farzana",
  "Adefela",
  "Jorge",
  "Ahsan",
  "Eric",
  "Jay",
];

console.log(lastIndexOf(Names, 'Adefela'));
