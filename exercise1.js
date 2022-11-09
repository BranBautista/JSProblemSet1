let wordsArray = ['aa','b','hello','sun' ,'hi', 'e' ,'nice', 'cool', 'accompany', 'background', 'candidate', 'dialogue', 'essential', 'yesterday'];
let regexVowels = /^[aeiou]+$/g;

function countConson(string) { 
    let count;
    let regexConson = /[b-df-hj-np-tv-z]/gi;
    if(string.match(regexVowels)){
        count = 1;
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
        return inputArraySorted = inputArray.sort((a,b) => a.length - b.length).reverse();
    } 
    else if (customSort == 'consonant-ascending'){
        let inputArraySorted = inputArray.sort((a,b) => countConson(a) - countConson(b));
        inputArraySorted.forEach(element => {
            if(element.match(regexVowels) != null){
               let vowel = element;
               let fromIndex = inputArraySorted.indexOf(vowel);

               let vowel2 = inputArraySorted.splice(fromIndex,1)[0]
               inputArraySorted.splice(0,0,vowel)
            }
        });
        return inputArraySorted
    }
    else if (customSort == 'consonant-descending'){
        let inputArraySorted = inputArray.sort((a,b) => countConson(a) - countConson(b));
        inputArraySorted.forEach(element => {
            if(element.match(regexVowels) != null){
               let vowel = element;
               let fromIndex = inputArraySorted.indexOf(vowel);

               let vowel2 = inputArraySorted.splice(fromIndex,1)[0]
               inputArraySorted.splice(0,0,vowel)
            }
        });
        return inputArraySorted.reverse();
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