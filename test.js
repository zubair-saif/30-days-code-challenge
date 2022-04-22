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

let arr1 = ['5', '2', "+", "D", "C"];
let result1 = null;
let rs1 = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === "C") {
        rs1.pop();
    } else if (arr1[i] === "D") {
        result1 = rs1[rs1.length - 1] * 2;
        rs1.push(result1);
    } else if (arr1[i] === "+") {
        result1 = rs1[rs1.length - 1] + 2;
        rs1.push(result1);
    } else {
        toNumber(rs1.push(arr1[i]));

    }
    let sum = rs1.reduce((a, b) => a + b);
    console.log(sum);
}