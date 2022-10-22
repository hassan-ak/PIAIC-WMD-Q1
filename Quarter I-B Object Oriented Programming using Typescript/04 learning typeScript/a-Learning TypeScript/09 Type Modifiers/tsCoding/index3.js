"use strict";
/*
    Chapter 9. Type Modifiers
    Type Predicates
*/
function isNumberOrString(value) {
    return ['number', 'string'].includes(typeof value);
}
function logValueIfExists(value) {
    if (isNumberOrString(value)) {
        // Type of value: number | string | null | undefined
        // value.toString();
        // Error: Object is possibly undefined.
    }
    else {
        console.log('Value does not exist:', value);
    }
}
// function typePredicate(input: WideType): input is NarrowType;
function isNumberOrString1(value) {
    return ['number', 'string'].includes(typeof value);
}
function logValueIfExists1(value) {
    if (isNumberOrString1(value)) {
        // Type of value: number | string
        value.toString(); // Ok
    }
    else {
        // Type of value: null | undefined
        console.log('value does not exist:', value);
    }
}
function isStandupComedian(value) {
    return 'routine' in value;
}
function workWithComedian(value) {
    if (isStandupComedian(value)) {
        // Type of value: StandupComedian
        console.log(value.routine); // Ok
    }
    // Type of value: Comedian
    //   console.log(value.routine);
    // ~~~~~~~
    // Error: Property 'routine' does not exist on type 'Comedian'.
}
function isLongString(input) {
    return !!(input && input.length >= 7);
}
function workWithText(text) {
    if (isLongString(text)) {
        // Type of text: string
        console.log('Long text:', text.length);
    }
    else {
        // Type of text: undefined
        // console.log('Short text:', text?.length);
        // ~~~~~~
        // Error: Property 'length' does not exist on type 'never'.
    }
}
