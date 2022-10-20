"use strict";
/*
    Chapter 5. Functions
    Function Parameters
*/
// Required Parameters
function singTwo(first, second) {
    console.log(`${first} / ${second}`);
}
// Logs: "Ball and Chain / undefined"
// singTwo('Ball and Chain');
// ~~~~~~~~~~~~~~~~
// Error: Expected 2 arguments, but got 1.
// Logs: "I Will Survive / Higher Love"
singTwo('I Will Survive', 'Higher Love'); // Ok
// Logs: "Go Your Own Way / The Chain"
// singTwo('Go Your Own Way', 'The Chain', 'Dreams');
// ~~~~~~~~
// Error: Expected 2 arguments, but got 3.
