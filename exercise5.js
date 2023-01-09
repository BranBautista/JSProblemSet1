function counter(word){
    let regexVowels = /[aeiou]/gi;
    let counter = 0;
    if (typeof word === 'number'){
        return counter = Math.floor(Math.log10(word)) + 1;
    }
    else {
        if(!word.match(regexVowels)){
            return 0;
        }
        else {
            return counter = word.match(regexVowels).length;
        }
    }
}

counterVowel = counter('Hello, world, this is my counter of vowels');
counterDigits = counter(10023435);
console.log(counterVowel);
console.log(counterDigits);

counterVowel2 = counter('why');
console.log(counterVowel2);

counterVowel3 = counter('0ABCIOU');
console.log(counterVowel3);