/*
    Chapter 03: Unions and Literals
*/

/***********************************************************/

/*--------------------------*/
/*-- Strict Null Checking --*/
/*--------------------------*/

/***********************************************************/

/**********************************/
/*** The Billion-Dollar Mistake ***/
/**********************************/

/***********************************************************/
// Error
// // const firstName: string = null;

/***********************************************************/
let nameMaybe1 = Math.random() > 0.5 ? 'Tony Hoare' : undefined;
// Error
// // nameMaybe1.toLowerCase();

/***********************************************************/
let nameMaybe2 = Math.random() > 0.5 ? 'Tony Hoare' : undefined;
// Error
// // nameMaybe2.toLowerCase();

/***********************************************************/

/****************************/
/*** Truthiness Narrowing ***/
/****************************/

/***********************************************************/
let geneticist1 = Math.random() > 0.5 ? 'Barbara McClintock' : undefined;
if (geneticist1) {
  geneticist1.toUpperCase(); // Ok: string
}
// Error
// // geneticist1.toUpperCase();
geneticist1 && geneticist1.toUpperCase(); // Ok: string | undefined
geneticist1?.toUpperCase(); // Ok: string | undefined

/***********************************************************/
let biologist = Math.random() > 0.5 && 'Rachel Carson';
if (biologist) {
  biologist; // Type: string
} else {
  biologist; // Type: false | string
}

/***********************************************************/

/****************************************/
/*** Variables Without Initial Values ***/
/****************************************/

/***********************************************************/
let mathematician1: string;
// Error
// // mathematician1?.length;
mathematician = 'Mark Goldberg';
mathematician.length; // Ok

/***********************************************************/
let mathematician2: string | undefined;
mathematician2?.length; // Ok
mathematician2 = 'Mark Goldberg';
mathematician2.length; // Ok

/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
