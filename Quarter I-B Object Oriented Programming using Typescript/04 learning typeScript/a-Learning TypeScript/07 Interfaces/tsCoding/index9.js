"use strict";
/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Nested Interfaces
let myNovel;
// Ok
myNovel = {
    author: {
        name: 'Jane Austen',
    },
    setting: {
        place: 'England',
        year: 1812,
    },
};
// myNovel = {
//   author: {
//     name: 'Emily Brontë',
//   },
//   setting: {
//     place: 'West Yorkshire',
//   },
//   // Error: Property 'year' is missing in type
//   // '{ place: string; }' but required in type 'Setting'.
// };
