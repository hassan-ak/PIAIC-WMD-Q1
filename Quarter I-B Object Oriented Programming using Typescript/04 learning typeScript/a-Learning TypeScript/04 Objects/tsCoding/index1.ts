// *** Objects *** //

//// *** Structural Typing *** ////
type WithFirstName = {
  firstName: string;
};
type WithLastName = {
  lastName: string;
};
var hasBoth = {
  firstName: 'Lucille',
  lastName: 'Clifton',
  mid: 'Jack',
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth;
console.log(hasBoth);
console.log(withFirstName);
console.log(withLastName);

/*
Usage Checking
*/
type FirstAndLastNames = {
  first: string;
  last: string;
};
// Ok
var hasBoth1: FirstAndLastNames = {
  first: 'Sarojini',
  last: 'Naidu',
};
// error here
// var hasOnlyOne: FirstAndLastNames = {
//   first: 'Sappho',
// };

type TimeRange = {
  start: Date;
};
// const hasStartString: TimeRange = {
//   start: '1879-02-13',
//   // Error: Type 'string' is not assignable to type 'Date'.
// };

/*
  Excess Property Checking
*/
type Poet1 = {
  born: number;
  name: string;
};
// Ok: all fields match what's expected in Poet
const poetMatch: Poet1 = {
  born: 1928,
  name: 'Maya Angelou',
};
// const extraProperty: Poet1 = {
//   activity: 'walking',
//   born: 1935,
//   name: 'Mary Oliver',
// };
// Error: Type '{ activity: string; born: number; name: string; }'
// is not assignable to type 'Poet'.
// Object literal may only specify known properties,
// and 'activity' does not exist in type 'Poet'

const existingObject = {
  activity: 'walking',
  born: 1935,
  name: 'Mary Oliver',
};
const extraPropertyButOk: Poet1 = existingObject;

/*
  Nested Object Types
*/
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
// const poemMismatch: Poem = {
//   author: {
//     name: 'Sylvia Plath',
//   },
//   // Error: Type '{ name: string; }' is not assignable
//   // to type '{ firstName: string; lastName: string; }'.
//   // Object literal may only specify known properties, and 'name'
//   // does not exist in type '{ firstName: string; lastName: string; }'.
//   name: 'Tulips',
// };

type Author = {
  firstName: string;
  lastName: string;
};
type Poem1 = {
  author: Author;
  name: string;
};
// const poemMismatch: Poem = {
//   author: {
//     name: 'Sylvia Plath',
//   },
//   // Error: Type '{ name: string; }' is not assignable to type 'Author'.
//   // Object literal may only specify known properties,
//   // and 'name' does not exist in type 'Author'.
//   name: 'Tulips',
// };

/*
  Optional Properties
*/
type Book = {
  author?: string;
  pages: number;
};
// Ok
const ok: Book = {
  author: 'Rita Dove',
  pages: 80,
};
// const missing: Book = {
//   author: 'Rita Dove',
// };
// Error: Property 'pages' is missing in type
// '{ author: string; }' but required in type 'Book'

type Writers = {
  author: string | undefined;
  editor?: string;
};
// Ok: author is provided as undefined
const hasRequired: Writers = {
  author: undefined,
};
// const missingRequired: Writers = {};
// ~~~~~~~~~~~~~~~
// Error: Property 'author' is missing in type
// '{}' but required in type 'Writers'.
