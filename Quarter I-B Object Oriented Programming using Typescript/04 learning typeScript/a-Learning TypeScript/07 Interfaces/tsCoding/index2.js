"use strict";
/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Optional Properties
// Ok
const ok = {
    author: 'Rita Dove',
    pages: 80,
};
const missing = {
    pages: 80,
};
// Error: Property 'author' is missing in type
// '{ pages: number; }' but required in type 'Book'.
