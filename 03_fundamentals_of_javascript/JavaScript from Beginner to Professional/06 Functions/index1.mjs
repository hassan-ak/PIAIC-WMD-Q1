/*
    Writing functions
*/
import prompSync from 'prompt-sync';
const prompt = prompSync();

console.log('\n\n');
function sayHello() {
  let you = prompt("What's your name? ");
  console.log('Hello', you + '!');
}
sayHello();

console.log('\n\n');
let varContainingFunction = function () {
  let varInFunction = "I'm in a function.";
  console.log('hi there!', varInFunction);
};
varContainingFunction();

console.log('\n\n');
