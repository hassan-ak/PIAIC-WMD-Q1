"use strict";
// step10_tuples
/*****************************************************/
//Tuple types have the advantage that you can accurately describe the type of an array of mixed types
var tuple = [1, 'bob'];
var secondElement = tuple[1]; // secondElement now has type 'string'
/*****************************************************/
// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.
// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.
// You can create a tuple using JavaScript's array syntax:
const failingResponse = ['Not Found', 404];
// but you will need to declare its type as a tuple.
const passingResponse = ['{}', 200];
// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).
// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.
if (passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log(localInfo);
}
const staff = [
    [0, 'Adankwo', 'adankwo.e@'],
    [1, 'Kanokwan', 'kanokwan.s@'],
    [2, 'Aneurin', 'aneurin.s@', 'Supervisor'],
];
const payStubs = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];
calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions
// https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/
/*****************************************************/
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
/*****************************************************/
// define our tuple
let ourTuple1;
// initialized incorrectly which throws an error
// // ourTuple1 = [false, 'Coding God was mistaken', 5];
/*****************************************************/
// define our tuple
let ourTuple2;
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');
console.log(ourTuple2);
/*****************************************************/
// define our readonly tuple
const ourReadonlyTuple = [
    5,
    true,
    'The Real Coding God',
];
// throws error as it is readonly.
// // ourReadonlyTuple.push('Coding God took a day off');
/*****************************************************/
const graph = [55.2, 41.3];
/*****************************************************/
const graph1 = [55.2, 41.3];
const [x, y] = graph1;
/*****************************************************/
/*****************************************************/