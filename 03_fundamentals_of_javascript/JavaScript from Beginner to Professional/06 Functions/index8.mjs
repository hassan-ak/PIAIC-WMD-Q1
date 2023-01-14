/*
    Recursive functions
*/

// function getRecursive(nr) {
//   console.log(nr);
//   getRecursive(--nr);
// }
// getRecursive(3);

function getRecursive(nr) {
  console.log(nr);
  if (nr > 0) {
    getRecursive(--nr);
  }
}
getRecursive(3);

console.log(' ');
console.log(' ');

function logRecursive(nr) {
  console.log('Started function:', nr);
  if (nr > 0) {
    logRecursive(nr - 1);
  } else {
    console.log('done with recursion');
  }
  console.log('Ended function:', nr);
}
logRecursive(3);
