"use strict";
// *** Objects *** //
//// *** Object Types *** ////
const poet = {
    born: 1935,
    name: 'Mary Oliver',
};
poet['born']; // Type: number
poet.name; // Type: string
// poet.end; // returns error
//// Declaring Object Types
var poetLater;
// Ok
poetLater = {
    born: 1935,
    name: 'Mary Oliver',
};
// var poetLater: Poet;
// Ok
var poetLater = {
    born: 1935,
    name: 'Sara Teasdale',
};
// poetLater = 'Emily Dickinson';
// Error: Type 'string' is not assignable to 'Poet'.
