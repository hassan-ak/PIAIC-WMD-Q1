"use strict";
/*
    # Chapter 6. Arrays
*/
Object.defineProperty(exports, "__esModule", { value: true });
/***********************************************************/
/*-----------------*/
/*-- Array Types --*/
/*-----------------*/
/***********************************************************/
let arrayOfNumbers;
arrayOfNumbers = [4, 8, 15, 16, 23, 42];
/***********************************************************/
/********************************/
/*** Array and Function Types ***/
/********************************/
/***********************************************************/
let createStrings;
let stringCreators;
/***********************************************************/
/*************************/
/*** Union-Type Arrays ***/
/*************************/
/***********************************************************/
// Type is either a number or an array of strings
let stringOrArrayOfNumbers;
// Type is an array of elements that are each either a number or a string
let arrayOfStringOrNumbers;
// Type is (string | undefined)[]
const namesMaybe = ['Aqualtune', 'Blenda', undefined];
/***********************************************************/
/***************************/
/*** Evolving Any Arrays ***/
/***************************/
/***********************************************************/
// Type: any[]
let values = [];
// Type: string[]
values.push('');
// Type: (number | string)[]
values[0] = 0;
/***********************************************************/
/*******************************/
/*** Multidimensional Arrays ***/
/*******************************/
/***********************************************************/
let arrayOfArraysOfNumbers;
arrayOfArraysOfNumbers = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
];
/***********************************************************/
// Type: number[][]
let arrayOfArraysOfNumbers1;
