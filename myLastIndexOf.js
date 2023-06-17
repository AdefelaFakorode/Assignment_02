function Present(name) {
  if (name === "Adefela") {
    return true;
  }
}

function lastIndexOf(array, callback) {
  let lastIndex = array.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    let name = array[i];
    if (callback(name)) {
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

console.log(lastIndexOf(Names, Present));
