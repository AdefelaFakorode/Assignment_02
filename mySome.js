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