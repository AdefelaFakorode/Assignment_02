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


function myFilter(callback){
    let newWord = [];
}