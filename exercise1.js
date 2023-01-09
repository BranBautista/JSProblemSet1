let wordsArray = ['aa','b','hello','sun' ,'hi', 'e' ,'nice', 'cool', 'accompany', 'background', 'candidate', 'dialogue', 'essential', 'yesterday'];
let regexVowels = /^[aeiou]+$/g;
let regexConson = /[b-df-hj-np-tv-z]/gi;

function countConson(string) { 
    let count;
    if(string.match(regexVowels)){
        count = string.match(regexVowels).length;
    }
    else{
        count = string.match(regexConson).length;
    }
    
    return count;
}

function sortArray (array,customSort){

    let regexVowels = /^[aeiou]+$/g;
    let inputArray = array;
    let inputArraySorted = [];

    if (customSort == 'descending'){
        return inputArraySorted = inputArray.sort().reverse();
    } 
    else if (customSort == 'length-ascending'){
        return inputArraySorted = inputArray.sort((a,b) => a.length - b.length);
    } 
    else if (customSort == 'length-descending'){
        return inputArraySorted = inputArray.sort((a,b) => b.length - a.length);
    } 
    else if (customSort == 'consonant-ascending'){
        let inputArraySorted = inputArray.sort((a,b) => countConson(a) - countConson(b));
        for (let i = 0; i < inputArraySorted.length; i++){
            if(inputArraySorted[i].match(regexVowels) != null){
               let vowel = inputArraySorted[i];
               let fromIndex = inputArraySorted.indexOf(vowel);
               inputArraySorted.splice(fromIndex,1)[0];
               inputArraySorted.splice(0,0,vowel);
            }
        };
        return inputArraySorted
    }
    else if (customSort == 'consonant-descending'){
        let inputArraySorted = inputArray.sort((a,b) => countConson(b) - countConson(a));
        for (let i = 0; i < inputArraySorted.length; i++){
            if(inputArraySorted[i].match(regexVowels) === null){
                let consonant = inputArraySorted[i];
                let fromIndex = inputArraySorted.indexOf(consonant);
                inputArraySorted.splice(fromIndex,1)[0];
                inputArraySorted.splice(0,0,consonant);
            }
        }
        return inputArraySorted
    }
    else {
        return inputArraySorted = inputArray.sort();
    }
}

console.log(sortArray(wordsArray));
console.log(sortArray(wordsArray,'descending'));
console.log(sortArray(wordsArray,'length-ascending'));
console.log(sortArray(wordsArray,'length-descending'));
console.log(sortArray(wordsArray,'consonant-ascending'));
console.log(sortArray(wordsArray,'consonant-descending'));