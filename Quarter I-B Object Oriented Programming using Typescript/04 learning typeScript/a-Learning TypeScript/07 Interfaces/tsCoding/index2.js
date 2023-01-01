"use strict";
/*
    # Chapter 7. Interfaces
*/
/***********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
// Ok
const ok = {
    author: 'Rita Dove',
    pages: 80,
};
const missing = {
    pages: 80,
};
function read(page) {
    console.log(page.text);
    // Error
    // page.text += "!";//
}
const pageIsh = {
    text: 'Hello, world!',
};
// Ok: messengerIsh is an inferred object type with text, not a Page
pageIsh.text += '!';
// Ok: read takes in Page, which happens to
// be a more specific version of pageIsh's type
read(pageIsh);
const hasBoth = {
    property: () => '',
    method() {
        return '';
    },
};
const typedFunctionAlias = (input) => input.length; // Ok
const typedCallSignature = (input) => input.length; // Ok
let hasCallCount;
function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}
keepsTrackOfCalls.count = 0;
hasCallCount = keepsTrackOfCalls; // Ok
function doesNotHaveCount() {
    console.log('No idea!');
}
const counts = {};
counts.apple = 0; // Ok
counts.banana = 1; // Ok
const publishDates = {
    Frankenstein: new Date('1 January 1818'),
};
publishDates.Frankenstein; // Type: Date
console.log(publishDates.Frankenstein.toString()); // Ok
publishDates.Beloved; // Type: Date, but runtime value of undefined!
console.log(publishDates.Beloved.toString()); // Ok in the type system, but...
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
// Ok
const mixesNumbersAndStrings = {
    0: '',
    key1: '',
    key2: undefined,
};
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
