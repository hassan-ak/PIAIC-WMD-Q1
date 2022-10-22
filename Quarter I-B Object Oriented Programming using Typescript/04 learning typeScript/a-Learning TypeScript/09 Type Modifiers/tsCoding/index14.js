"use strict";
/*
    Chapter 9. Type Modifiers
    Const Assertions
*/
//  Literals to Primitives
// Type: () => string
const getName = () => 'Maria Bamford';
// Type: () => "Maria Bamford"
const getNameConst = () => 'Maria Bamford';
function tellJoke(joke) {
    if (joke.style === 'one-liner') {
        console.log(joke.quote);
    }
    else {
        console.log(joke.quote.split('\n'));
    }
}
// Type: { quote: string; style: "one-liner" }
const narrowJoke = {
    quote: 'If you stay alive for no other reason do it for spite.',
    style: 'one-liner',
};
tellJoke(narrowJoke); // Ok
// Type: { quote: string; style: string }
const wideObject = {
    quote: 'Time flies when you are anxious!',
    style: 'one-liner',
};
// tellJoke(wideObject);
// // Error: Argument of type '{ quote: string; style: string; }'
// // is not assignable to parameter of type 'LogAction'.
// // Types of property 'style' are incompatible.
// // Type 'string' is not assignable to type '"story" | "one-liner"'.
