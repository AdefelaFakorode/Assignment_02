let Student ={
    name: 'Adefela',
    age: 21,
    gradClass: 2024,
    sport: 'Basketball'  
};

function grabKeys(obj){
    let listOfKeys = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            listOfKeys.push(key);
        }
    }
    return listOfKeys;
}

console.log(grabKeys(Student));