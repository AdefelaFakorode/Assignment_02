function isHeSpiderMan(value) {
  if (value == "Peter Parker") {
    return true;
  }
}

function myInclude(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let val = array[i];
    if (callback(val)) {
      return true;
    }
  }
  return false;
}

console.log(
  myInclude(
    [
      1,
      true,
      "Bruce Wayne",
      "Clark Kent?",
      "Dr. Strange",
      false,
      "Peter Parker",
      "Barry Allen",
      2,
      "Miles Morales",
    ],
    isHeSpiderMan
  )
);
