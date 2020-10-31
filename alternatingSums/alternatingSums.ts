// function alternatingSums(a: number[]): number[] {
//     const result = [0, 0]
   

//     for (let i = 0; i < a.length; i++) {
//         if (i % 2 === 0) {
//             result[1] += a[i]
//         } else {
//             result[0] += a[i]
//         }
//     }
//     return result;

// }

const alternatingSums = (a: number[]) => {
    const result = [0, 0]
        
    a.forEach((num: number, index: number) => index % 2 === 0 ? result[1] += num : result[0] += num)
    return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))

