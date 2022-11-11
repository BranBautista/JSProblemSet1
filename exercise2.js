let counter = 0;
let numTimes = 2;

function sum (a,b){
    counter = counter + 1;
    return a + b;
}

function limitFunc (fn,...args){
    if(counter == numTimes){
        throw new Error ('You exceeded the execution times')
    } else {
        return fn(...args);
    }
}
 
limitFunc(sum,2,3)
limitFunc(sum,4,3)
limitFunc(sum,2,3)