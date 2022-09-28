let wordsArray = ['hello','sun' ,'hi' ,'nice', 'cool', 'Accompany', 'background', 'candidate', 'dialogue', 'Essential'];

function sortArray (array,customSort){

    let inputArray = array;
    let inputArraySorted = [];

    if (customSort == 'descending'){
        for (let i = 0; i < inputArray.length; i++){
            inputArraySorted[i] = inputArray.sort()[inputArray.length-i-1];
        }
    } else if (customSort == 'length-ascending' || customSort == 'length-descending'){
        let counter = 1;
        inputArraySorted[0] = inputArray[0];
        for (let i = 1; i < inputArray.length; i++){
            for (let j=0; j< counter; j++){
                if (inputArray[i].length < inputArraySorted[j].length || inputArray[i].length == inputArraySorted[j].length){
                    inputArraySorted.splice(j,0,inputArray[i]);
                    break;
                } 
                else {
                    if(j==i-1){
                        inputArraySorted.push(inputArray[i]);
                    }
                }
            }
            counter = counter + 1;
        }
        if (customSort == 'length-descending'){
            let inputArraySortedH = [];
            for (let i = 0; i < inputArraySorted.length; i++){
                inputArraySortedH[i] = inputArraySorted[inputArray.length-i-1];
            }
            return inputArraySortedH;
        }
    }
    else if (customSort == 'consonant-ascending' || customSort == 'consonant-descending'){
        let vowels =["a","e","i","o","u","A","E","I","O","U"];
        let arrayNumbers = [];
        inputArraySorted[0] = inputArray[0];
        for (let i=0; i<inputArray.length ; i++){
            let counter = 0;
            for (let j=0; j<inputArray[i].length; j++){
                if(vowels.indexOf(inputArray[i].toLowerCase().charAt(j))==-1){ //check to Lower Case
                    counter = counter + 1;
                }
            }
            arrayNumbers.push([counter,inputArray[i]]);

        }
        arrayNumbers.sort();
        for (let i=0; i< arrayNumbers.length; i++){
            inputArraySorted[i] = arrayNumbers[i][1];
        }
        if (customSort == 'consonant-descending'){
            let inputArraySortedH = [];
            for (let i = 0; i < inputArraySorted.length; i++){
                inputArraySortedH[i] = inputArraySorted[inputArray.length-i-1];
            }
            return inputArraySortedH;
        }
    }
    else {
        inputArraySorted = inputArray.sort();
    }
    return inputArraySorted;
}

console.log(sortArray(wordsArray,'consonant-descending'));


// console.log('ABC'.charCodeAt(2))

// console.log('reaA'.toLowerCase())


//let charCodeBef = inputArray[0].charCodeAt(0);
//for (let i = 1; i < inputArray.length; i++){
    //let wordLowerCase = inputArray[i].toLowerCase();
        // let charCodeAft = wordLowerCase.charCodeAt(0);
        // if (charCodeAft < charCodeBef){
//     inputArray[i] = inputArray[i].toLowerCase();
// }


