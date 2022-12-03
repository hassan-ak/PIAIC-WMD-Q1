/*
    Chapter 03: Unions and Literals
*/

/***********************************************************/

/*------------------*/
/*-- Type Aliases --*/
/*------------------*/

/***********************************************************/
let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined;

/***********************************************************/
type RawData = boolean | number | string | null | undefined;
let rawDataFirst1: RawData;
let rawDataSecond1: RawData;
let rawDataThird1: RawData;

/***********************************************************/

/***************************************/
/*** Type Aliases Are Not JavaScript ***/
/***************************************/

/***********************************************************/
type SomeType = string | undefined;
// Error
// // console.log(SomeType);

/***********************************************************/

/******************************/
/*** Combining Type Aliases ***/
/******************************/

/***********************************************************/
type Id = number | string;
// Equivalent to: number | string | undefined | null
type IdMaybe = Id | undefined | null;

/***********************************************************/
type IdMaybe1 = Id1 | undefined | null; // Ok
type Id1 = number | string;

/***********************************************************/
