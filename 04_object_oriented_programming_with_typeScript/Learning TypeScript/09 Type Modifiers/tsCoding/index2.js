"use strict";
/*
    # Chapter 9. Type Modifiers
*/
Object.defineProperty(exports, "__esModule", { value: true });
/***********************************************************/
/*---------------------*/
/*-- Type Predicates --*/
/*---------------------*/
/***********************************************************/
function isNumberOrString(value) {
    return ['number', 'string'].includes(typeof value);
}
function logValueIfExists(value) {
    if (isNumberOrString(value)) {
        // Error
        // value.toString();
    }
    else {
        console.log('Value does not exist:', value);
    }
}
/***********************************************************/
function isNumberOrString1(value) {
    return ['number', 'string'].includes(typeof value);
}
function logValueIfExists1(value) {
    if (isNumberOrString1(value)) {
        value.toString(); // Ok
    }
    else {
        console.log('value does not exist:', value);
    }
}
function isStandupComedian(value) {
    return 'routine' in value;
}
function workWithComedian(value) {
    if (isStandupComedian(value)) {
        console.log(value.routine); // Ok
    }
    // // Error
    // console.log(value.routine);
}
/***********************************************************/
function isLongString(input) {
    return !!(input && input.length >= 7);
}
function workWithText(text) {
    if (isLongString(text)) {
        console.log('Long text:', text.length);
    }
    else {
        // Type of text: undefined
        // console.log('Short text:', text?.length);
    }
}
