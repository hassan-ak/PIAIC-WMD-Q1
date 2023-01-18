"use strict";
/*
    Chapter 03: Unions and Literals
*/
/***********************************************************/
/*---------------*/
/*-- Narrowing --*/
/*---------------*/
/***********************************************************/
/****************************/
/*** Assignment Narrowing ***/
/****************************/
/***********************************************************/
let admiral;
admiral = 'Grace Hopper';
admiral.toUpperCase(); // Ok: string
// Error
// // admiral.toFixed();
/***********************************************************/
let inventor = 'Hedy Lamarr';
inventor.toUpperCase(); // Ok: string
// Error
// // inventor.toFixed();
/***********************************************************/
/**************************/
/*** Conditional Checks ***/
/**************************/
/***********************************************************/
// Type of scientist: number | string
let scientist = Math.random() > 0.5 ? 'Rosalind Franklin' : 51;
if (scientist === 'Rosalind Franklin') {
    // Type of scientist: string
    scientist.toUpperCase(); // Ok
}
// Error
// // scientist.toUpperCase();
/***********************************************************/
/*********************/
/*** Typeof Checks ***/
/*********************/
/***********************************************************/
let researcher = Math.random() > 0.5 ? 'Rosalind Franklin' : 51;
if (typeof researcher === 'string') {
    researcher.toUpperCase(); // Ok: string
}
if (!(typeof researcher === 'string')) {
    researcher.toFixed(); // Ok: number
}
else {
    researcher.toUpperCase(); // Ok: string
}
typeof researcher === 'string'
    ? researcher.toUpperCase() // Ok: string
    : researcher.toFixed(); // Ok: number
/***********************************************************/
