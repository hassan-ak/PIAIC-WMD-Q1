/* 
    for loop
*/

//
console.log('\n\n');
const num = 7;
for (let i = 1; i < 11; i++) {
  console.log(num * i);
}

//
console.log('\n\n');
const myWork = [];
for (let i = 1; i < 11; i++) {
  let status = i % 2 ? true : false;
  let temporary = {
    name: `Lesson ${i}`,
    status: status,
  };
  myWork.push(temporary);
}
console.log(myWork);

//
console.log('\n\n');
import promptSync from 'prompt-sync';
const prompt = promptSync();
const maxValue = 10;
const randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log('Number : ', randomNumber);
let status = false;
while (!status) {
  let userInput = prompt('Guess a number between 1 and ' + maxValue + ' ');
  userInput = Number(userInput);
  if (userInput === randomNumber) {
    status = true;
    console.log('You won! The number was ' + randomNumber);
  } else if (userInput > randomNumber) {
    console.log('Sorry, your guess was too high.');
  } else {
    console.log('Sorry, your guess was too low.');
  }
}

//
console.log('\n\n');
const products = ['Shirt', 'Trouser', 'Jacket'];
const gifts = ['Pen', 'Keychain', 'Tie'];
for (let i = 0; i < products.length; i++) {
  for (let j = 0; j < gifts.length; j++) {
    console.log(products[i] + ' - ' + gifts[j]);
  }
}

//
console.log('\n\n');
let car = {
  make: 'Land Rover',
  model: 'Defender 110',
  year: '2023',
  color: 'Black',
};
for (const key in car) {
  console.log(car[key]);
}

//
console.log('\n\n');
const multiplyTable = [];
const numValues = 11;
for (let i = 0; i < numValues; i++) {
  const temporary = [];
  for (let j = 0; j < numValues; j++) {
    temporary.push(i * j);
  }
  multiplyTable.push(temporary);
}
console.table(multiplyTable);

//
console.log('\n\n');
