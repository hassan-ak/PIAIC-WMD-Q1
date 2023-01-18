/*
    Chapter 4. Objects
*/

/***********************************************************/

/*------------------*/
/*-- Object Types --*/
/*------------------*/

/***********************************************************/
const poet = {
  born: 1935,
  name: 'Mary Oliver',
};
poet['born']; // Type: number
poet.name; // Type: string
// Error
// // poet.end;

/***********************************************************/

/******************************/
/*** Declaring Object Types ***/
/******************************/

/***********************************************************/
let poetLater1: {
  born: number;
  name: string;
};
// Ok
poetLater1 = {
  born: 1935,
  name: 'Mary Oliver',
};
// Error
// // poetLater1 = 'Sappho';

/***********************************************************/

/****************************/
/*** Aliased Object Types ***/
/****************************/

/***********************************************************/
type Poet = {
  born: number;
  name: string;
};
let poetLater: Poet;
// Ok
poetLater = {
  born: 1935,
  name: 'Sara Teasdale',
};
// Error
// // poetLater = 'Emily Dickinson';

/***********************************************************/
