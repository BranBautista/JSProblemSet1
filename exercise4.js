objA = {
    propA1 : 1,
    propA2 : 2,
    propA3 : 3
}

objB = {
    propB1 : 1,
    propB2 : 2,
    propB3 : 3
}

function copyProp(object1, object2, array){
    let arrayPropertiesObj2 = Object.keys(object2);
    if (typeof array === "undefined"){
        for (let i = 0 ; i < arrayPropertiesObj2.length ; i++){
            object1[arrayPropertiesObj2[i]] = object2[arrayPropertiesObj2[i]];
        }
    }
    else {
        let arraySpecificProp = array;
        for (let i = 0 ; i < arraySpecificProp.length ; i++){
            object1[arraySpecificProp[i]] = object2[arraySpecificProp[i]];
        }
    }
}

copyProp(objA,objB,['propB1','propB2'])

console.log(objA)