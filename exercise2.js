var counter = 0;

function printHello (){
    counter = counter + 1;
    console.log( "Hello everybody!")
}

function limitFunc (fn,num){
    return function (){
        if (counter == num) {
            return;
        }
        fn();
    }
}


var limited = limitFunc(printHello,2);

limited()
limited()
limited()