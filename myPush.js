function addName(name) {
  return "Peter Griffin";
}

function myPush(array, callback) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }

  newArray[newArray.length] = callback();
  return newArray;
}

console.log(myPush(["Adefela", "Adam"], addName));
