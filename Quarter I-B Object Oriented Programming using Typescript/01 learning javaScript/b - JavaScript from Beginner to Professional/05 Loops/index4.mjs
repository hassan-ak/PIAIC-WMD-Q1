/* 
    Nested loops
*/

// while (condition) {
//   // code that gets executed as long as condition 1 is true
//   // this loop depends on condition 1 being true
//   while (condition) {
//     // code that gets executed as long as condition 2 is true
//   }
// }

console.log('\n\n');
let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for (let j = 0; j < 7; j++) {
    arrOfArrays[i].push(j);
  }
}
console.log(arrOfArrays);

console.log('\n\n');
console.table(arrOfArrays);

console.log('\n\n');
