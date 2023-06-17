function reverseArray(array){
    let stack = [];
    let finalArray = [];
    let lastIndex = array.length -1;
    for(let i = lastIndex; i >= 0; i--){
        finalArray.push(array[i]);
    }
    return finalArray;

    for(let i = 0; i < finalArray.length; i++){
        

    }
}




let letters = ['A','B','C'];
console.log(reverseArray(letters));