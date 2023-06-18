let Adefela ={
    lastName: 'Fakorode',
    eyeColor: 'Brown',
    hairColor: 'Black'
}

let Ayo ={
    lastName: 'Fakorode',
    eyeColor: 'Brown',
    hairColor: 'Black'
}

function deepEqual(value1, value2){
    if( value1 === value2){
        return true;
    }

    if( typeof value1 == 'object' && value1 !== null 
    && typeof value2 === 'object' && value2 !== null
    ){
        let v1 = Object.entries(value1);
        let v2 = Object.entries(value2);

        if(v1 === v2){
            return true;
        }
    }


}

console.log(deepEqual(Adefela,Ayo));