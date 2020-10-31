// function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

// }

const areEquallyStrong = (yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number) =>  {
    const yourArm = yourLeft + yourRight;
    const friemdsArm = friendsLeft + friendsRight;

    return yourArm === friemdsArm ? true : false;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
