/*
    Chapter 4. Objects
*/

/***********************************************************/

/*-----------------------*/
/*-- Structural Typing --*/
/*-----------------------*/

/***********************************************************/
type WithFirstName = {
  firstName: string;
};
type WithLastName = {
  lastName: string;
};
const hasBoth = {
  firstName: 'Lucille',
  lastName: 'Clifton',
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth;
//
console.log(hasBoth);
console.log(withFirstName);
console.log(withLastName);

/***********************************************************/

/**********************/
/*** Usage Checking ***/
/**********************/

/***********************************************************/
type FirstAndLastNames = {
  first: string;
  last: string;
};
// Ok
const hasBoth1: FirstAndLastNames = {
  first: 'Sarojini',
  last: 'Naidu',
};
// Error
// // const hasOnlyOne: FirstAndLastNames = {
// //   first: 'Sappho',
// // };

/***********************************************************/
type TimeRange = {
  start: Date;
};
// Error
// // const hasStartString: TimeRange = {
// //   start: '1879-02-13',
// //   // Error: Type 'string' is not assignable to type 'Date'.
// // };

/***********************************************************/

/********************************/
/*** Excess Property Checking ***/
/********************************/

/***********************************************************/
type Poet1 = {
  born: number;
  name: string;
};
// Ok: all fields match what's expected in Poet
const poetMatch: Poet1 = {
  born: 1928,
  name: 'Maya Angelou',
};
// Error Extra Property
// // const extraProperty: Poet1 = {
// //   activity: 'walking',
// //   born: 1935,
// //   name: 'Mary Oliver',
// // };

/***********************************************************/
const existingObject = {
  activity: 'walking',
  born: 1935,
  name: 'Mary Oliver',
};
const extraPropertyButOk: Poet1 = existingObject; // Ok

/***********************************************************/

/***************************/
/*** Nested Object Types ***/
/***************************/

/***********************************************************/
type Poem = {
  author: {
    firstName: string;
    lastName: string;
  };
  name: string;
};
// Ok
const poemMatch: Poem = {
  author: {
    firstName: 'Sylvia',
    lastName: 'Plath',
  },
  name: 'Lady Lazarus',
};
// Error
// // const poemMismatch: Poem = {
// //   author: {
// //     name: 'Sylvia Plath',
// //   },
// //   name: 'Tulips',
// // };

/***********************************************************/
type Author = {
  firstName: string;
  lastName: string;
};
type Poem1 = {
  author: Author;
  name: string;
};
// Error
// // const poemMismatch: Poem1 = {
// //   author: {
// //     name: 'Sylvia Plath',
// //   },
// //   name: 'Tulips',
// // };

/***********************************************************/

/***************************/
/*** Optional Properties ***/
/***************************/

/***********************************************************/
type Book = {
  author?: string;
  pages: number;
};
// Ok
const ok: Book = {
  author: 'Rita Dove',
  pages: 80,
};
// Error
// // const missing: Book = {
// //   author: 'Rita Dove',
// // };

/***********************************************************/
type Writers = {
  author: string | undefined;
  editor?: string;
};
// Ok: author is provided as undefined
const hasRequired: Writers = {
  author: undefined,
};
// Error
// // const missingRequired: Writers = {};

/***********************************************************/
