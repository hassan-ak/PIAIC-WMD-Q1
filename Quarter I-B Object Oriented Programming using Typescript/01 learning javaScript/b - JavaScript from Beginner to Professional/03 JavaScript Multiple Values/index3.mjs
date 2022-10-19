let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
let arrOfArrays2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var value1 = arrOfArrays[0][1];
let value2 = arrOfArrays[2][2];
let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
let middleValue = arrOfArraysOfArrays[1][1][1];

console.log(arrOfArrays);
console.log(arrOfArrays2);
console.log(arrOfArraysOfArrays);
