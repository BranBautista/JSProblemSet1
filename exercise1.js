let wordsArray = ['hello','sun' ,'hi' ,'nice', 'cool', 'accompany', 'background', 'candidate', 'dialogue', 'essential', 'yesterday'];

function countConson(string) { 
    let count;
    let regexConson = /[bcdfghjklmnpqrstvwxyz]/gi;
    count = string.match(regexConson).length;
    return count;
}

function sortArray (array,customSort){

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
        return inputArraySorted = inputArray.sort((a,b) => countConson(a) - countConson(b));
    }
    else if (customSort == 'consonant-descending'){
        return inputArraySorted = inputArray.sort((a,b) => countConson(a) - countConson(b)).reverse();
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
