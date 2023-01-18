"use strict";
/*
    Chapter 2. The Type System
*/
/***********************************************************/
/*-----------------------*/
/*-- What’s in a Type? --*/
/*-----------------------*/
/***********************************************************/
// Permitive Types
let singer = 'Aretha';
console.log(typeof singer);
// // null;
// // undefined;
// // boolean; // true or false
// // string; // "", "Hi!", "abc123", …
// // number; // 0, 2.1, -4, …
// // bigint; // 0n, 2n, -4n, …
// // symbol; // Symbol(), Symbol("hi"), …
// Inferred type: string
/***********************************************************/
// Infered types
let bestSong = Math.random() > 0.5 ? 'Chain of Fools' : 'Respect';
/***********************************************************/
/********************/
/*** Type Systems ***/
/********************/
/***********************************************************/
var firstName = 'Whitney';
// Error
// // firstName.length();
/***********************************************************/
/***********************/
/*** Kinds of Errors ***/
/***********************/
/***********************************************************/
// Syntax Error
// Error
// // let let wat;
/***********************************************************/
// Type errors
// Error
// // console.blub("Nothing is worth more than laughter.");
/***********************************************************/
