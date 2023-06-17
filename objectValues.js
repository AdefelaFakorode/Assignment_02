let Student ={
    name: 'Adefela',
    age: 21,
    gradClass: 2024,
    sport: 'Basketball'  
};

function grabValues(obj){
    let listOfVal = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            listOfVal.push(obj[key]);
        }
    }
    return listOfVal;
}

console.log(grabValues(Student));