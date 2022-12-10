"use strict";
/*
    # Chapter 5. Functions
*/
Object.defineProperty(exports, "__esModule", { value: true });
function createDate(monthOrTimestamp, day, year) {
    return day === undefined || year === undefined
        ? new Date(monthOrTimestamp)
        : new Date(year, monthOrTimestamp, day);
}
// Ok
createDate(554356800);
// Ok
createDate(7, 27, 1987);
// Error
// // function format(getData: () => string): string;
function format(data, needle, haystack) {
    return needle && haystack ? data.replace(needle, haystack) : data;
}
