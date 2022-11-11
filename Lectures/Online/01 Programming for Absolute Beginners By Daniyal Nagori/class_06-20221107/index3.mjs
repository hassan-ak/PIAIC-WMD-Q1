// Class 06

/*
  Concerancy
*/
/*--------------------------------------------------------------------------*/

// How JS work

function a() {
  console.log('Hello from function');
}
a();
console.log('console from file');

// 1 - JS runs and allocate memory to function
// 3 - console operation perfomed
// 4 - nothing to perform poped from call stack
// 2 - execution context created and pushed to call stack
// 5 - pushd to call stacked function permed and poped

/*--------------------------------------------------------------------------*/
console.log('hi');
setTimeout(function cb1() {
  console.log('cbi');
});
console.log('bye');
