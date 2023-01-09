function sum (a,b){
    return a + b;
}

function sub (a,b){
    return a - b;
}

function limitFunc (fn,times,...args){
    let counter = 0;
    return function () {
    if(counter < times){
        counter = counter + 1;
        return fn(...args);
    } else {
        throw new Error ('You exceeded the execution times')
        }
    }
}
 
let adding = limitFunc(sum,2,2,3);

console.log(adding());
console.log(adding());


let substracting = limitFunc(sub,4,3,2);

console.log(substracting());
console.log(substracting());
console.log(substracting());
console.log(substracting());

console.log(substracting());
console.log(adding());