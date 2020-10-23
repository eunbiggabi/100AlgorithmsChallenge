function allLongestStrings(inputArray: string[]): string[] {

    // My solution 
    // let longestString = inputArray[0].length;
    // const longestStrings = [];

    // // for(let elem of inputArray) {
    // //     if(longestString <= elem.length) {
    // //         longestStrings.push(elem)
    // //     }
    // // }

    //     inputArray.forEach(function(elem) {
    //         if (longestString <= elem.length) {
    //             longestStrings.push(elem)
    //         }
    //     });

    // return longestStrings;
    
    let longestLength = 0;
    const longestWords = [];

    inputArray.forEach((word: string) => longestLength = longestLength < word.length ? word.length : longestLength);
    inputArray.forEach((word: string) => {
        if(longestLength === word.length) {
            longestWords.push(word)
        }
    });
    
    return longestWords
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));