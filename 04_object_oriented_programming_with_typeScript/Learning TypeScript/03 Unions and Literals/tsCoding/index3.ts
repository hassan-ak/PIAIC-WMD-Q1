/*
    Chapter 03: Unions and Literals
*/

/***********************************************************/

/*-------------------*/
/*-- Literal Types --*/
/*-------------------*/

/***********************************************************/
const philosopher = 'Hypatia';

/***********************************************************/
let lifespan: number | 'ongoing' | 'uncertain';
lifespan = 89; // Ok
lifespan = 'ongoing'; // Ok
// Error
// // lifespan = true;

/***********************************************************/

/*****************************/
/*** Literal Assignability ***/
/*****************************/

/***********************************************************/
let specificallyAda: 'Ada';
specificallyAda = 'Ada'; // Ok
// Error
// // specificallyAda = 'Byron';
let someString = ''; // Type: string
// Error
// // specificallyAda = someString;
someString = specificallyAda;
someString = ':)';

/***********************************************************/
