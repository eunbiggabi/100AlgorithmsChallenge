function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {

    const arrNum = [];
    const findMaxNum = [];

    for (let i = 0; i < inputArray.length - (k - 1); i++) {
        arrNum.push(inputArray.slice(i, i + k)) 
       
    }
    console.log(arrNum)
    for (let findMax of arrNum) {
        findMaxNum.push(findMax.reduce((a: number, b: nunmber) => a + b))
    }
    console.log(findMaxNum)
    const maxNum = Math.max(...findMaxNum)

    return maxNum

}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 4));