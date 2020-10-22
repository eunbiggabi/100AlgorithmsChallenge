function addTwoDigits(n: any): number {

    // My solution
    // const toString = n.toString().split("");
    // let digit = 1;
    // let add = "";

    // for(let i = 0; i < toString.length; i++) {
    //     toString[i] = digit; 
    //     add += toString[i]
    // }

    // const result = parseInt(add);
    // return result;

    // 문제를 잘못이해함 완전히 틀렸음 ㅋㅋ

    const nums = n.toString().split("");
    let sum = 0;

    // for(let i = 0; i < nums.length; i++) {
    //     sum += parseInt(nums[i])
    // }


    nums.forEach((elem: string) => sum += parseInt(elem))
    return sum;
   
    // return nums.reduce((a: string, b: string) =>  parseInt(a) + parseInt(b))

}

console.log(addTwoDigits(29));

