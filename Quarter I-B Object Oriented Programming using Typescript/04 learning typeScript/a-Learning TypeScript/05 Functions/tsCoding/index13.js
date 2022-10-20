"use strict";
/*
    Chapter 5. Functions
    More Return Types
*/
// Never Returns
function fail(message) {
    throw new Error(`Invariant failure: ${message}.`);
}
function workWithUnsafeParam(param) {
    if (typeof param !== 'string') {
        fail(`param should be a string, not ${typeof param}`);
    }
    // Here, param is known to be type string
    param.toUpperCase(); // Ok
}
