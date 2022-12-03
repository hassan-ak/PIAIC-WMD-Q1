/*
    Chapter 2. The Type System
*/

/***********************************************************/

/*----------------------*/
/*-- Type Annotations --*/
/*----------------------*/

/***********************************************************/
// Evolving any
let rocker; // Type: any
rocker = 'Joan Jett'; // Type: string
rocker.toUpperCase(); // Ok
rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok
// Error
// // rocker.toUpperCase();

/***********************************************************/
// Type annonation
let rocker1: string;
rocker1 = 'Joan Jett';
// Error
// // rocker1 = 19.58;

/***********************************************************/

/************************************/
/*** Unnecessary Type Annotations ***/
/************************************/

/***********************************************************/
let firstName2: string = 'Tina';

/***********************************************************/
