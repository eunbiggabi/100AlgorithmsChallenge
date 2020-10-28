// function almostIncreasingSequence(sequence: number[]): boolean {

//     let count = 0

//     for(let i = 0; i < sequence.length; i++) {
//         console.log(sequence[i])
//         console.log(sequence[i - 1])
//         if (sequence[i] <= sequence[i - 1]) {
           
//            console.log(sequence[i])
           
//         }
//     }
    
// }

function almostIncreasingSequence(sequence: number[]): boolean {

    let count = 0

    for(let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
           count++
        }
    }
    return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1, 4, 1])) 

console.log(almostIncreasingSequence([1, 3, 2])) 


// const countEvenNumber = ((num: number[]) =>   
//   num.filter((elem: number) => (elem % 2 === 0)).length
// console.log(countEvenNumber([1,2,3,4,5,6,]))

// const isEqualTo100 = (a: number, b: number) => 
//     a === 100 || b === 100 || a + b === 100;

    // console.log(isEqualTo100(0, 100))
    // console.log(isEqualTo100(100, 0))
    // console.log(isEqualTo100(99, 1))
    // console.log(isEqualTo100(50, 46))

    // const getFileExtension = (str: string) =>
    //     str.slice(str.lastIndexOf("."))

    // console.log(getFileExtension("index.js"));
    // console.log(getFileExtension("index.js.png"));

    // const moveCharsForward = (str: string) => 
    //     str
    //     .split("")
    //     .map((char: string) => String.fromCharCode(char.charCodeAt(0) + 1))
    //     .join("");

    //     console.log(moveCharsForward("asd"))

    // const formatDate = (date = new Date()) => {
    //     const days = date.getDate();
    //     const months = date.getMonth() + 1;
    //     const years = date.getFullYear();
    //     return `${days}/${months}/${years}`
    // }

    // console.log(formatDate())

    // const addNew = (str: string) => 
    //     // str.indexOf("New!") === 0 ? str : `New! ${str}`
    //     str.indexOf("New!") ? `New! ${str}` : str

    // console.log(addNew("dlskfo"))
    // console.log(addNew("New! qlgowd"))

    // const makeNewString = (str: string) =>
    //     str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

    // console.log(makeNewString("alkogoelkso"))
    // console.log(makeNewString("ad"))
    // console.log(makeNewString("adc"))

    // const firstHalfString = (str: string) =>
    //     str.slice(0, str.length / 2)

    // console.log(firstHalfString("adcdefg"))

    // const removeFirstChar = (str1: string, str2: string) => 
    //     str1.slice(1) + str2.slice(1)

    // console.log(removeFirstChar("kyu", "jeon"))
        
// const nearestTo100 = (num1: number, num2: number) =>
//     100 - num1 > 100 - num2 ? num2 : num1

//     console.log(nearestTo100(3, 6))
//     console.log(nearestTo100(99, 6))
//     console.log(nearestTo100(50, 50))

// const countChars = (str: string, char: string) => {
//   const check =  
//     str
//     .split('')
//     .filter((ch: string) => ch === char).length 

//     return check >= 2 && check <= 4 
// }
    

// const countChars = (str: string, char: string): number => 
//     str
//     .split('')
//     .filter((ch: string) => ch === char).length


// const contain2To4 = (str: string, char: string): boolean => 
//     countChars(str, char) >= 2 && countChars(str, char) <= 4


//     console.log(contain2To4("ooh", "o"))
//     console.log(contain2To4("oh", "o"))
//     console.log(contain2To4("oooh", "o"))
//     console.log(contain2To4("ooooh", "o"))
//     console.log(contain2To4("oooooh", "o"))

// const countEvenNumber = (arr: number): number =>
//     arr.filter((num: number) => num % 2 === 0).length

// const makeArr = (num: number): number => {

//     const arrays = [];

//     for(let i = 1; i <= num; i++) {
//         arrays.push(i)
//     }
//     return arrays.filter((num: number) => num % 2 === 0).length
// }

// const countEvenNumber = (arr: number[]): number =>
//     arr.filter((num: number) => num % 2 === 0).length

// const createArrayOfNumbers = (num: number): number[] => {
//     const returnArray = [];
//     for(let i = 1 ; i <= num; i++) {
//         returnArray.push(i);
//     }
//     return returnArray;
// }


// console.log(countEvenNumber(createArrayOfNumbers(9)))
// console.log(countEvenNumber(createArrayOfNumbers(6)))

// const isAscending = (arr: number[]): boolean => {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1])  return false 
//     }   
//     return true
// } 


// console.log(isAscending([1,2,3,4,5,6]))
// console.log(isAscending([1,2,6,4,5,6]))
// console.log(isAscending([1,2,7,4,5,6]))

// const largestEvenNumber = (arr: number[]): number => {

//     const evenNumbers = [];

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenNumbers.push(arr[i])
//         }
//     }
    
   
//     evenNumbers.sort((a, b) => b - a)
//     return evenNumbers[0]
    
   
// }

// const largestEvenNumber = (arr: number[]): number =>
//     Math.max(...arr.filter((num: number) => num % 2 === 0))

// console.log(largestEvenNumber([1,2,10,11,6,7,4,9,8,]))
 

// const replaceFirstDigit = (str: string): string =>
//     str.replace(/[0-9]/, '$');

// console.log(replaceFirstDigit("dlsigl1l3ll"))

// const leapYear = (year: number): boolean => year % 4 === 0 

//    console.log(leapYear(1999))
//    console.log(leapYear(2000))


// const objA = { a: 1, b: 2, c: 1};
// const objB = { a: 1, b: 1, c: 1};
// const objC = { a: 1, b: 1, c: 1};

// const isEqualObject = (obj1: object, obj2: object): boolean => 
//   Object.keys(obj1).every(key => obj2[key]);

// console.log(isEqualObject(objA, objB));

// console.log([1,2,3,4,5,6].every((x: number) => x > 3))
// console.log([1,2,3,4,5,6].every((x: number) => x < 7))

// const isEveryElem = (arr: number[], fn: any) => {
//     for(let i = 0; i < arr.length; i++) {
//         if (!fn(arr[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isEveryElem([1,2,3,4,5], (x: number) => x > 0))
// console.log(isEveryElem([1,2,3,4,5], (x: number) => x > 3))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const getWaysToClimbStaircase = (numStairs: number, allowedStairsPerSteop: number[]): number[][] => {
//     numStairs.

// }


// console.log(getWaysToClimbStaircase(10, [2, 3]))

// const countCoins = (money: number, coins = [25, 10, 5, 2, 1]) => {
//     const totalCoins = [];
//     for(let i = 0; i < coins.length; i++) {
//          const thisCoinNum = Math.floor(money / coins[i])
//             console.log(thisCoinNum)
//          for(let j = 0; j < thisCoinNum; j++) {
//              totalCoins.push(coins[i])
//              console.log(totalCoins)
//          }
//          money = money - (coins[i] * thisCoinNum)
//         //  money -= coins[i] * thisCoinNum;
//     }
//     return totalCoins;
// }

// console.log(countCoins(46))

// const getWaysToClimbStaircase = (numStairs: number, allowedStairsPerStep: number[]): number[] => {
    
//     const totalNumStairs = [];
//     for(let i = 0; i < allowedStairsPerStep.length; i++) {
//         const thisStair = Math.floor(numStairs / allowedStairsPerStep[i])
//         console.log(thisStair)
//         for(let j = 0; j < thisStair; j++) {
//             totalNumStairs.push(allowedStairsPerStep[i])
//             console.log(totalNumStairs)
//         }
//         numStairs = numStairs - (allowedStairsPerStep[i] * thisStair)
//     }
//     return totalNumStairs;
// }


// console.log(getWaysToClimbStaircase(10, [2, 3]))

// const twinkleStar = "Twinkel, twinkle little star";

// const starRegex = /twinkle/gi;
// const result = twinkleStar.match(starRegex);

// console.log(result)


