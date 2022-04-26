// let arr = ["5", "2", "C", "D", "+"];
// let result = null;
// let rs = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "C") {
//     } else if (arr[i] === "D") {

//     } else if (arr[i] === "+") {

//     } else {
//         console.log(rs.push(i))

//     }
// }

let arr = ["5", "2", "D", "C", "+",];
let result = null;
let rs = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "C") {
        rs.pop();
    } else if (arr[i] === "D") {
        result = rs[rs.length - 1] * 2;
        rs.push(result);
    } else if (arr[i] === "+") {
        result = rs[rs.length - 1] + 2
            ;
        rs.push(result);
    } else {
        (rs.push(arr[i]));


    }
    let n = rs.map(num => Number(num));
    console.log('for', n)

}

// let sum = rs.reduce((a, b) => a + b);
// console.log(sum);
//[5,2,4]=11
//if digit is C then pop the last element
//if digit is D then multiply the last element by 2
//if digit is + then add the last element by 2
//if digit is number then push the number to the array