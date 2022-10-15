function counter(string){
    let regexVowels = /[aeiou]/gi;
    let numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let counter = 0;
    if (typeof string === 'number' || numbers.indexOf(string.charAt(0)) != -1){
        let number = string;
        if (typeof string === 'string'){
            number = Number(string);
        }
        counter = Math.floor(Math.log10(number)) + 1;
    }
    else {
        counter = string.match(regexVowels).length;
    }
    return counter;
}

counterVowel = counter('Hello, world, this is my counter of vowels');
counterDigits = counter(10023435);

console.log(counterVowel);
console.log(counterDigits);
