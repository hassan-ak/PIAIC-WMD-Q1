/*
    Functions
*/

function coffeeOrder(drink) {
  return `Your ${drink} is on its way!`;
}
const order = coffeeOrder('Espresso');
console.log(order);

const value1 = 1;
const value2 = 2;
let operator = '+';
function calculator(a, b, c) {
  if (c === '-') {
    console.log(a - b);
  } else {
    console.log(a + b);
  }
}
calculator(value1, value2, operator);

const array = [];
for (let i = 0; i < 10; i++) {
  let value1 = i * 5;
  let value2 = i * i;
  let result = calculator1(value1, value2, '+');
  array.push(result);
}
console.log(array);
function calculator1(a, b, c) {
  if (c === '-') {
    return a - b;
  } else {
    return a + b;
  }
}
