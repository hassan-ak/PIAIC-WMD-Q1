/********************************************/
// Infering types
let word = 'Hello world';
// Srong typing
let word1: string = 'Hello world';

/********************************************/
// Assignability error
// // word1 = 33
// // word = 33

/********************************************/
// Any type
let name1;
// // type any

/********************************************/
// Inferred type: string
let bestSong = Math.random() > 0.5 ? 'Chain of Fools' : 'Respect';

/********************************************/
let firstName = 'Whitney';
firstName.length;
// Error
// // firstName.length();

/********************************************/
// Syntax error
// // let let = "Hello"

/********************************************/
// Type error
let var1: number = 123;
// Error
// // var1.toUpperCase()

/********************************************/
// Assignability Error
let var2: string = 'Hello';
// Error
// // var2 = 123;

/********************************************/
// evolving any
let rocker; // Type: any
rocker = 'Joan Jett'; // Type: string
rocker.toUpperCase(); // Ok
rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok
// Error
// // rocker.toUpperCase();

/********************************************/
// Explict
let rocker1: string;
rocker1 = 'Joan Jett';
// error
// // rocker1 = 19

/********************************************/
let rapper = 'Queen Latifah';
rapper.length; // ok
// Error
// // rapper.pish('!');

/********************************************/
let cher = {
  firstName: 'Cherilyn',
  lastName: 'Sarkisian',
};
// Error
// // cher.middleName;

/********************************************/
/********************************************/
/********************************************/
/********************************************/
/********************************************/
/********************************************/
/********************************************/
