let counter = 0;

function sum (a,b){
    counter = counter + 1;
    return a + b;
}

function printHello (){
    counter = counter + 1;
    return "Hi, how are you?";
}

function limitFunc (fn,num,...args){
    return function (){
        if (counter == num) {
            return;
        }
        console.log(fn(...args));
    }
}

var limited = limitFunc(sum,2,3,5);

limited()
limited()
limited()
