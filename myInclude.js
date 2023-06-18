function myInclude(array, target) {
  for (let i = 0; i < array.length; i++) {
    let val = array[i];
    if (val == target) {
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
    'Bruce Wayne'
  )
);
