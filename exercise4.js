let objA = {
    propA1 : 1,
    propA2 : 2,
    propA3 : 3
}

let objB = {
    propB1 : 1,
    propB2 : 2,
    propB3 : 3
}

function copyProp(objectCopyTo, objectCopyFrom, arrayPropToCopy){
    let arrayPropertiesObj2 = Object.keys(objectCopyFrom);
    if (typeof arrayPropToCopy === "undefined"){
        for (let i = 0 ; i < arrayPropertiesObj2.length ; i++){
            objectCopyTo[arrayPropertiesObj2[i]] = objectCopyFrom[arrayPropertiesObj2[i]];
        }
    }
    else {
        let arraySpecificProp = arrayPropToCopy;
        for (let i = 0 ; i < arraySpecificProp.length ; i++){
            objectCopyTo[arraySpecificProp[i]] = objectCopyFrom[arraySpecificProp[i]];
        }
    }
}

copyProp(objA,objB,['propB1','propB2']);

console.log(objA);
