function counter(string){
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let counter = 0;
    if (typeof string === 'number' || numbers.indexOf(string.charAt(0)) != -1){
        let number = string;
        if (typeof string === 'string'){
            number = Number(string);
        }
        else {
            number = string;
        }
        counter = Math.floor(Math.log10(number)) + 1;
    }
    else {
        for (let i=0; i<string.length ; i++){
            if(vowels.indexOf(string.charAt(i))!=-1){
                counter = counter + 1;
            }
        }
    }
    return counter;
}

counterVowel = counter('Hello, world, this is my counter of vowels');
counterDigits = counter(10023435);

console.log(counterVowel);
console.log(counterDigits);