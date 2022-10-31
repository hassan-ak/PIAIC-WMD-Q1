// Class 03

/* 
  Math Expressions Familiar Operators
*/
var add = 2 + 3; // 5
var subtraction = 8 - 4; // 4
var multiplication = 2 * 2; // 4
var division = 4 / 2; // 2
var modulus = 9 % 3; // 0

/*
  Math Expressions UnFamiliar Operators
*/
var i = 1;
var num = i++; //  1

var i = 1;
var num = ++i; //  2

/*
  Math Expressions Eliminating Ambiguity
*/
var totalVal = (5 + 2) * 3 + 6; // 27
var totalVal = 2 * 4 * 4 + 2; // 34

/*
  Concatenating Text String
*/
var userName = 'Daniyal';
console.log('Thanks, ' + userName + '!');

/*
  Prompts
*/

/*
  If, Else, Else If Statements
*/
var x = 'Pakistan';
var correctAnswer = 'Pakistan';
if (x == correctAnswer) {
  console.log('Correct!');
}

var x = 'Lahore';
var correctAnswer = 'Pakistan';
if (x == correctAnswer) {
  console.log('Correct!');
} else {
  console.log('Wrong!');
}

var x = 'Pakista';
var correctAnswer = 'Pakistan';
if (x == correctAnswer) {
  console.log('Correct!');
} else if (x == 'Pakista') {
  console.log('Close!');
} else {
  console.log('Wrong!');
}

/*
  Comparison Operators
*/
var a = 2 + 2 == '4'; //  true
var b = 2 + 2 === '4'; //  false
var c = 2 + 2 > 4; //  false
var d = 2 + 2 >= 4; //  true
var e = 2 + 3 !== 5; //  false

/*
  Testing Sets Of Conditions
  (Logical Operators)
*/
var x = 6;
var y = 10;

var a1 = x < y && x === 6; // true
var a2 = x < y && x !== 6; // false
var a3 = x === y || y === 10; // true
var a4 = (x === 6 && y === 4) || x < y; // true

/*
  If Statement Nested
*/
// Ticketing system
var country = 'pakistan';
// Number() function is used to convert the string to number
var age = 17;

if (country === 'pakistan') {
  if (age >= 18) {
    console.log('Here is your ticket');
  } else {
    console.error('Age restriction');
  }
} else {
  console.log('Invalid country');
}

/*
  Array
*/
var fruit1 = 'apple';
var fruit2 = 'banana';
var fruit3 = 'grapes';
var fruit4 = 'strawberry';
var fruit5 = 'orange';
var fruits = ['apple', 'banana', 'orange', 'grapes', 'strawberry'];

var fruits = ['apple', 'banana', 'orange', 'grapes', 'strawberry'];
fruits[0]; // apple
fruits[3]; // grapes
var x = [1, 2, 'daniyal']; // Arrays can store multiple types of data

/*
  Arrays: Adding and removing elements
*/
var pets = [];
pets[0] = 'dog'; // adds “dog” to an array at 0 index
pets[1] = 'cat'; // adds “cat” to an array at index 1

pets.pop(); // removes the last element of an array which is cat in our case
pets.push('parrot'); // adds a new element to an array

/*
  Arrays: Removing, inserting, and extracting elements
*/
var pets = [];
pets[0] = 'dog'; // adds “dog” to an array at 0 index
pets[1] = 'cat'; // adds “cat” to an array at index 1

pets.shift(); // removes the first element of an array which is cat in our case
pets.unshift('parrot'); // adds a new element to an array (at the beginning)

var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 0, 'Lemon', 'Kiwi');
// adds elements to an array at 2nd index
// deleted 0 elements

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1); // [Orange,Lemon,Apple,Mango]
