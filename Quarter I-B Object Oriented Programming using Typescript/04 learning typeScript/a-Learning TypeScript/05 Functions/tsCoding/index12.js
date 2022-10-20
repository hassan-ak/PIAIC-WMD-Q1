"use strict";
/*
    Chapter 5. Functions
    More Return Types
*/
// Void Returns
function logSong101(song) {
    if (!song) {
        return; // Ok
    }
    console.log(`${song}`);
    //   return true;
    // Error: Type 'boolean' is not assignable to type 'void'.
}
let songLogger;
songLogger = (song) => {
    console.log(`${song}`);
};
songLogger('Heart of Glass'); // Ok
function returnsVoid() {
    return;
}
let lazyValue;
// lazyValue = returnsVoid();
// Error: Type 'void' is not assignable to type 'string | undefined'.
const records = [];
function saveRecords(newRecords) {
    newRecords.forEach((record) => records.push(record));
}
saveRecords(['21', 'Come On Over', 'The Bodyguard']);
