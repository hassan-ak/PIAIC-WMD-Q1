"use strict";
// new Date(timestamp)
// new Date(year, month, day)
Object.defineProperty(exports, "__esModule", { value: true });
function createDate(dayOrTimestamp, month, year) {
    return month === undefined || year === undefined
        ? new Date(dayOrTimestamp)
        : new Date(year, month, dayOrTimestamp);
}
