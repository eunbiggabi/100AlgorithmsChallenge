function addBorder(picture: string[]): string[] {

    // // My solution
    // let first = picture[0].split(",");
    // first.push("*");
    // first.unshift("*");
    

    // let second = picture[1].split(",");
    // second.push("*");
    // second.unshift("*");
    
    // let needBorder = [first.join(""), second.join("")]
    // needBorder.push("*****");
    // needBorder.unshift("*****");

    // return needBorder;

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // const lengthOfWall = picture[0].length + 2;
    // let wall = "";

    // for(let i = 0; i < lengthOfWall; i++) {
    //     wall += "*";
    //     // 은 wall = wall.concat("*")랑 같다 똑같은 별 다섯개가 출력된다   
    // }

    // picture.push(wall);
    // picture.unshift(wall);

    // for (let i = 1; i < picture.length - 1; i++) {
    //     picture[i] = "*".concat(picture[i], "*")
    // }

    // return picture;

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // make it sample...

      const lengthOfWall = "*".repeat(picture[0].length + 2);
  
    picture.push(lengthOfWall);
    picture.unshift(lengthOfWall);

    for(let i = 1; i < picture.length - 1; i++) {
        picture[i] = "*".concat(picture[i], "*")
    }

    return picture;
}

console.log(addBorder(["abc", "ded"]));


