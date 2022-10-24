// Class 02

console.log('Hello World! from JS file');

alert('Hello World!');

document.write('Hello World!');

let x = 'Hassan';
var y = 'Ali';
const z = 'Khan';
console.log(x, y, z);

// Global and local variables
let name1 = 'One';
if (true) {
  console.log(name1);
}
function abc() {
  console.log(name1);
}
abc();

console.log(name1);
console.log(name4);
var name4 = 'Ali';
