function counter(word){
    let regexVowels = /[aeiouAEIOU]/gi;
    let regexNumbers = /\d/
    let numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let counter = 0;
    if (typeof word === 'number'){
        return counter = Math.floor(Math.log10(word)) + 1;
    }
    else {
        console.log(word.match(regexVowels))
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