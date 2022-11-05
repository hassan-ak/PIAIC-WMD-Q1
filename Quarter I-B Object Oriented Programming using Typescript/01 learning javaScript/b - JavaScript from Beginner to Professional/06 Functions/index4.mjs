/*
    Arrow Function
*/
let doingArrowStuff = (x) => console.log(x);
doingArrowStuff('H');
let addTwoNumbers = (x, y) => console.log(x + y);
addTwoNumbers(1 + 2);
let sayHi = () => console.log('hi');
sayHi();
const arr = ['squirrel', 'alpaca', 'buddy'];
arr.forEach((e) => console.log(e));

/*
    Spread operator
*/
let spread = ['so', 'much', 'fun'];
let message = ['JavaScript', 'is', ...spread, 'and', 'very', 'powerful'];
console.log(message);

function addTwoNumbers1(x, y) {
  console.log(x + y);
}
let arr1 = [5, 9];
addTwoNumbers1(...arr1);

function addFourNumbers(x, y, z, a) {
  console.log(x + y + z + a);
}
let arr2 = [5, 9];
let arr3 = [6, 7];
addFourNumbers(...arr2, ...arr3);

/*
    Rest parameter
*/
function someFunction(param1, ...param2) {
  console.log(param1, param2);
}
someFunction('hi', 'there!', 'How are you?');

/* 
    Return statement
*/
function addTwoNumbers11(x, y) {
  return x + y;
}
let resultsArr = [];
for (let i = 0; i < 10; i++) {
  let result = addTwoNumbers11(i, 2 * i);
  resultsArr.push(result);
}
console.log(resultsArr);

/*
    Returning with arrow functions
*/
let addTwoNumbers101 = (x, y) => x + y;
let result = addTwoNumbers101(12, 15);
console.log(result);

let addTwoNumbers45 = (x, y) => {
  console.log('Adding...');
  return x + y;
};
