"use strict";
/*
    Chapter 5. Functions
    Function Overloads
*/
// Call-Signature Compatibility
// function format(getData: () => string): string;
// ~~~~~~
// This overload signature is not compatible with its implementation signature.
function format(data, needle, haystack) {
    return needle && haystack ? data.replace(needle, haystack) : data;
}
