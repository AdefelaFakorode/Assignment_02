function myEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}


function square(number) {
    return number * number;
}

console.log(forEach([1,2,3,4,5], square(2)));
