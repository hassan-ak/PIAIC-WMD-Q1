"use strict";
/*
    # Chapter 5. Functions
*/
Object.defineProperty(exports, "__esModule", { value: true });
/***********************************************************/
/*-----------------------*/
/*-- More Return Types --*/
/*-----------------------*/
/***********************************************************/
/********************/
/*** Void Returns ***/
/********************/
/***********************************************************/
function logSong(song) {
    if (!song) {
        // Ok
        return;
    }
    console.log(`${song}`);
    // Error
    // // return true;
}
/***********************************************************/
let songLogger;
songLogger = (song) => {
    console.log(`${song}`);
};
songLogger('Heart of Glass'); // Ok
/***********************************************************/
function returnsVoid() {
    return;
}
let lazyValue;
// Error
// // lazyValue = returnsVoid();
/***********************************************************/
const records = [];
function saveRecords(newRecords) {
    newRecords.forEach((record) => records.push(record));
}
saveRecords(['21', 'Come On Over', 'The Bodyguard']);
/***********************************************************/
/*********************/
/*** Never Returns ***/
/*********************/
/***********************************************************/
function fail(message) {
    throw new Error(`Invariant failure: ${message}.`);
}
/***********************************************************/
function workWithUnsafeParam(param) {
    if (typeof param !== 'string') {
        fail(`param should be a string, not ${typeof param}`);
    }
    // Here, param is known to be type string
    // Ok
    param.toUpperCase();
}
