"use strict";
/*
    # Chapter 10. Generics
*/
Object.defineProperty(exports, "__esModule", { value: true });
let explicit = { value: 123 };
let implicit = {
    value: 'Be yourself. The world worships the original.',
};
// Type: KeyValuePair<string, string>
let allExplicit = {
    key: 'rating',
    value: 10,
};
// Type: KeyValuePair<string>
let oneDefaulting = {
    key: 'rating',
    value: 'ten',
};
// let firstMissing: KeyValuePair = {
//   key: 'rating',
//   value: 10,
// };
/***********************************************************/
function inTheEnd() { } // Ok
