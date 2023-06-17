/*
function mySome(array){
    evenNumbers= [];
    for(let i = 0; i < array.length; i++){
        number = array[i];
        if(number % 2 == 0){
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}

console.log(mySome([1,2,3,4,5]));
*/

function evenNumber(number) {
  return number % 2 == 0;
}

function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (callback(number)) {
      return true;
    }
  }
  return false;
}
console.log(mySome([1, 4, 5, 67, 3, 8], evenNumber));
