"use strict";
/*
    # Chapter 9. Type Modifiers
*/
/***********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------*/
/*-- Top Types --*/
/*---------------*/
/***********************************************************/
/******************/
/*** any, Again ***/
/******************/
/***********************************************************/
let anyValue;
anyValue = 'Lucille Ball'; // Ok
anyValue = 123; // Ok
console.log(anyValue); // Ok
/***********************************************************/
function greetComedian(name) {
    console.log(`Announcing ${name.toUpperCase()}!`);
}
greetComedian({ name: 'Bea Arthur' });
// Runtime error: name.toUpperCase is not a function
/***********************************************************/
/***************/
/*** unknown ***/
/***************/
/***********************************************************/
function greetComedian1(name) {
    // // Error
    // console.log(`Announcing ${name.toUpperCase()}!`);
}
/***********************************************************/
function greetComedianSafety(value) {
    if (typeof value === 'string') {
        console.log(`Announcing ${value.toUpperCase()}!`); // Ok
    }
    else {
        console.log("Well, I'm off.");
    }
}
greetComedianSafety('Betty White'); // Logs: 4
greetComedianSafety({}); // Does not log
