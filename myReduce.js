function myReduce(array, callback){
    let result = array[0];

    for(let i = 0; i < array.length; i++){
        result = callback(result, array[i], i, array)     ;   
    }
    return result;
}


let array = [0,1,2,3,4];

function Sum(result, currVal){
    return result + currVal;
}

console.log(myReduce(array, Sum))