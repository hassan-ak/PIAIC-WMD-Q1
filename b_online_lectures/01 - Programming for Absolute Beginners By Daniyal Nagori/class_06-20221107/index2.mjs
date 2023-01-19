// Class 06

/*
  Functions
*/
/*--------------------------------------------------------------------------*/
// Creating a Function
function showGreetingMessage() {}
// Invoking a Function
showGreetingMessage(); // "Hamzah, Welcome to our Website"
/*--------------------------------------------------------------------------*/
// Defining a Function
function showGreetingsMessage(name) {
  console.log(name + ', Welcome to our Website');
  // OR
  // console.log(`${name}, Welcome to our Website`)
}
// Invoking a Function
showGreetingsMessage('Hamzah'); // "Hamzah, Welcome to our Website"
showGreetingsMessage('Ali'); // "Ali, Welcome to our Website"
/*--------------------------------------------------------------------------*/
// Defining a Function
function showGreetingsMessage1(name) {
  return `${name}, Welcome to our Website`;
}
// Invoking a Function
let greetingMessage1 = showGreetingsMessage1('Hamzah'); // "Hamzah, Welcome to our Website"
let greetingMessage2 = showGreetingsMessage1('Ali'); // "Ali, Welcome to our Website"
console.log(greetingMessage1);
console.log(greetingMessage2);
/*--------------------------------------------------------------------------*/
function addTwoNumbers(x, y) {
  let result = x + y;
  return result;
}
let result = addTwoNumbers(100, 200);
if (result > 100) {
  console.log('Big Number');
}
/*--------------------------------------------------------------------------*/
// name = "Hello" is the default value
function showGreetingsMessage2(name = 'Hello') {
  console.log(`${name}, Welcome to our Website`);
}
showGreetingsMessage2(); // "Hello, Welcome to our Website"
showGreetingsMessage2('Ali'); // "Ali, Welcome to our Website"
/*--------------------------------------------------------------------------*/
const showGreetingsMessage3 = (name = 'Hello') =>
  `${name}, Welcome to our Website`;
let greetingMessage3 = showGreetingsMessage3(); // "Hello, Welcome to our Website"
let greetingMessage4 = showGreetingsMessage3('Ali'); // "Ali, Welcome to our Website"
console.log(greetingMessage3);
console.log(greetingMessage4);
/*--------------------------------------------------------------------------*/
let x = this; // windows if using browser
console.log(x);
//
const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function () {
    // Method
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person.fullName()); // Hamzah Syed
/*--------------------------------------------------------------------------*/
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo]; // [1, 2, 3, 4, 5, 6]
/*--------------------------------------------------------------------------*/
// var Example
function doingStuff() {
  if (true) {
    var x = 'local';
  }
  console.log(x); // local
}
console.log(x); // error - because var is function scoped
doingStuff();
// let Example
function doingStuff1() {
  if (true) {
    let x = 'local';
  }
  console.log(x); // error - because let is block scoped
}
doingStuff1();
/*--------------------------------------------------------------------------*/
// Normal Function
(function () {
  console.log('Hello Hamzah, Welcome to our Website');
})();
// Arrow Function
((name) => {
  console.log(`Hello ${name}, Welcome to our Website`);
})('hamzah');
/*--------------------------------------------------------------------------*/
function getRecursive(nr) {
  console.log(nr);
  if (nr > 0) {
    getRecursive(--nr); // Calling Itself
  }
}
getRecursive(3);
/*--------------------------------------------------------------------------*/
function logRecursive1(nr) {
  console.log('Started function:', nr);
  if (nr > 0) {
    logRecursive1(nr - 1);
  } else {
    console.log('done with recursion');
  }
  console.log('Ended function:', nr);
}
logRecursive1(3);
/*--------------------------------------------------------------------------*/
function doOuterFunctionStuff(nr) {
  console.log('Outer function');
  function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log('I can access outer variables:', nr);
  }
  doInnerFunctionStuff(nr);
}
doOuterFunctionStuff(2);
/*--------------------------------------------------------------------------*/
let functionVariable = function () {
  console.log('Not so secret though.');
};
functionVariable();
