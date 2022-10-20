"use strict";
/*
    Chapter 5. Functions
    Function Parameters
*/
// Rest Parameters
function singAllTheSongs(singer, ...songs) {
    for (const song of songs) {
        console.log(`${song}, by ${singer}`);
    }
}
singAllTheSongs('Alicia Keys'); // Ok
singAllTheSongs('Lady Gaga', 'Bad Romance', 'Just Dance', 'Poker Face'); // Ok
// singAllTheSongs('Ella Fitzgerald', 2000);
// ~~~~
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.
