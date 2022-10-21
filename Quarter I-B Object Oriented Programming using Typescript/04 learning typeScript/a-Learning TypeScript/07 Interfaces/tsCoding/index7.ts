/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Index Signatures
//     Mixing properties and index signatures

interface HistoricalNovels {
  Oroonoko: number;
  [i: string]: number;
}
// Ok
const novels: HistoricalNovels = {
  Outlander: 1991,
  Oroonoko: 1688,
};
// const missingOroonoko: HistoricalNovels = {
//   Outlander: 1991,
// };
// Error: Property 'Oroonoko' is missing in type
// '{ Outlander: number; }' but required in type 'HistoricalNovels'.

interface ChapterStarts {
  preface: 0;
  [i: string]: number;
}
const correctPreface: ChapterStarts = {
  preface: 0,
  night: 1,
  shopping: 5,
};
// const wrongPreface: ChapterStarts = {
//   preface: 1,
//   // Error: Type '1' is not assignable to type '0'.
// };
