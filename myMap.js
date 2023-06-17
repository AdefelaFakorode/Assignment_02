/*
function myMap(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }
    return result;
}
console.log(myMap([1,2,3,4,5]))
*/

function myMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

function square(number) {
    return number * number;
}

console.log(myMap([1,2,3,4,5], square));
