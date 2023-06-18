/*
function filter(words){
    let newList = [];
    for(let i = 0; i < words.length; i++){
        let singleWord = words[i];
        if(singleWord.length > 6){
            newList.push(singleWord);
        }
    }
    return newList;
}

let something = ['adefelaa', 'apple', 'axe', 'spidermannn'];
console.log(filter(something));
*/

function Filter(words, callback) {
  let newList = [];
  for (let i = 0; i < words.length; i++) {
    let singleWord = words[i];
    if (callback(singleWord)) {
      newList.push(singleWord);
    }
  }
  return newList;
}

let arr = [
  "Superman",
  "spiderman",
  "miles morales",
  "peter parker",
  "the spot",
];

function wordLength(arr) {
  return arr.length > 6;
}

console.log(Filter(arr, wordLength));
