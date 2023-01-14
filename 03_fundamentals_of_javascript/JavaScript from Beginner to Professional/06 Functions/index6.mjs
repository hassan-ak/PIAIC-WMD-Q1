/*
  Variable scope in functions
*/
/*
  Global variables
*/

let globalVar = 'Accessible everywhere!';
console.log('Outside function:', globalVar);
function creatingNewScope(x) {
  console.log('Access to global vars inside function.', globalVar);
}
creatingNewScope('some parameter');
console.log('Still available:', globalVar);

let x = 'global';
function doingStuff() {
  let x = 'local';
  console.log(x);
}
doingStuff();
console.log(x);

let x1 = 'global';
function doingStuff1(x1) {
  console.log(x1);
}
doingStuff1('param');

function confuseReader() {
  x = 'Guess my scope...';
  console.log('Inside the function:', x);
}
confuseReader();
console.log('Outside of function:', x);
