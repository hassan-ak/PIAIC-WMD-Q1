"use strict";
/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Index Signatures
//     Mixing properties and index signatures
// Ok
const novels = {
    Outlander: 1991,
    Oroonoko: 1688,
};
const correctPreface = {
    preface: 0,
    night: 1,
    shopping: 5,
};
// const wrongPreface: ChapterStarts = {
//   preface: 1,
//   // Error: Type '1' is not assignable to type '0'.
// };
