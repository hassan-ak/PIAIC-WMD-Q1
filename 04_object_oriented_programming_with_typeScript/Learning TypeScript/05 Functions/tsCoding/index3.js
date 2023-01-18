"use strict";
/*
    # Chapter 5. Functions
*/
Object.defineProperty(exports, "__esModule", { value: true });
/***********************************************************/
/*--------------------*/
/*-- Function Types --*/
/*--------------------*/
/***********************************************************/
let nothingInGivesString;
/***********************************************************/
let inputAndOutput;
/***********************************************************/
const songs = ['Juice', 'Shake It Off', "What's Up"];
function runOnSongs(getSongAt) {
    for (let i = 0; i < songs.length; i += 1) {
        console.log(getSongAt(i));
    }
}
function getSongAt(index) {
    return `${songs[index]}`;
}
// Ok
runOnSongs(getSongAt);
function logSong(song) {
    return `${song}`;
}
// Error
// // runOnSongs(logSong);
/***********************************************************/
/*********************************/
/*** Function Type Parentheses ***/
/*********************************/
/***********************************************************/
// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined;
/***********************************************************/
// Type is either undefined or a function that returns a string
let maybeReturnsString;
/***********************************************************/
/*********************************/
/*** Parameter Type Inferences ***/
/*********************************/
/***********************************************************/
let singer;
singer = function (song) {
    // Type of song: string
    return `Singing: ${song.toUpperCase()}!`; // Ok
};
/***********************************************************/
const songs1 = ['Call Me', 1, 'The Chain'];
songs1.forEach((song, index) => {
    console.log(`${song} is at index ${index}`);
});
let stringToNumber;
// Ok
stringToNumber = (input) => input.length;
function usesNumberToString(numberToString) {
    console.log(`The string is: ${numberToString(1234)}`);
}
// Ok
usesNumberToString((input) => `${input}! Hooray!`);
