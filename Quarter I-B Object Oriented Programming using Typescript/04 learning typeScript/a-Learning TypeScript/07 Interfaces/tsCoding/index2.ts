/*
    # Chapter 7. Interfaces
*/
/***********************************************************/

/*-------------------------*/
/*-- Types of Properties --*/
/*-------------------------*/

/***********************************************************/

/***************************/
/*** Optional Properties ***/
/***************************/

/***********************************************************/

interface Book {
  author?: string;
  pages: number;
}
// Ok
const ok: Book = {
  author: 'Rita Dove',
  pages: 80,
};
const missing: Book = {
  pages: 80,
};

/***********************************************************/

/****************************/
/*** Read-Only Properties ***/
/****************************/

/***********************************************************/
interface Page {
  readonly text: string;
}
function read(page: Page) {
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

/***********************************************************/

/*****************************/
/*** Functions and Methods ***/
/*****************************/

/***********************************************************/
interface HasBothFunctionTypes {
  property?: () => string;
  method?(): string;
}
const hasBoth: HasBothFunctionTypes = {
  property: () => '',
  method() {
    return '';
  },
};
// Optional so can be used with check
// hasBoth.property(); // Ok
// hasBoth.method(); // Ok

/***********************************************************/

/***********************/
/*** Call Signatures ***/
/***********************/

/***********************************************************/
type FunctionAlias = (input: string) => number;
interface CallSignature {
  (input: string): number;
}
const typedFunctionAlias: FunctionAlias = (input) => input.length; // Ok
const typedCallSignature: CallSignature = (input) => input.length; // Ok

/***********************************************************/
interface FunctionWithCount {
  count: number;
  (): void;
}
let hasCallCount: FunctionWithCount;
function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1;
  console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}
keepsTrackOfCalls.count = 0;
hasCallCount = keepsTrackOfCalls; // Ok
function doesNotHaveCount() {
  console.log('No idea!');
}
// Error
// hasCallCount = doesNotHaveCount;

/***********************************************************/

/************************/
/*** Index Signatures ***/
/************************/

/***********************************************************/
interface WordCounts {
  [i: string]: number;
}
const counts: WordCounts = {};
counts.apple = 0; // Ok
counts.banana = 1; // Ok
// Error
// counts.cherry = false;

/***********************************************************/
interface DatesByName {
  [i: string]: Date;
}
const publishDates: DatesByName = {
  Frankenstein: new Date('1 January 1818'),
};
publishDates.Frankenstein; // Type: Date
console.log(publishDates.Frankenstein.toString()); // Ok
publishDates.Beloved; // Type: Date, but runtime value of undefined!
console.log(publishDates.Beloved.toString()); // Ok in the type system, but...
// Runtime error: Cannot read property 'toString'
// of undefined (reading publishDates.Beloved)

/***********************************************************/

/*+++++++++++++++++++++++++++++++++++++++++++++*/
/*+++ Mixing properties and index signatures ++*/
/*+++++++++++++++++++++++++++++++++++++++++++++*/

/***********************************************************/
interface HistoricalNovels {
  Oroonoko: number;
  [i: string]: number;
}
// Ok
const novels: HistoricalNovels = {
  Outlander: 1991,
  Oroonoko: 1688,
};
// Error
// const missingOroonoko: HistoricalNovels = {
//   Outlander: 1991,
// };

/***********************************************************/
interface ChapterStarts {
  preface: 0;
  [i: string]: number;
}
const correctPreface: ChapterStarts = {
  preface: 0,
  night: 1,
  shopping: 5,
};
// Error
// const wrongPreface: ChapterStarts = {
//   preface: 1,
// };

/***********************************************************/

/*+++++++++++++++++++++++++++++++*/
/*+++ Numeric index signatures ++*/
/*+++++++++++++++++++++++++++++++*/

/***********************************************************/
// Ok
interface MoreNarrowNumbers {
  [i: number]: string;
  [i: string]: string | undefined;
}
// Ok
const mixesNumbersAndStrings: MoreNarrowNumbers = {
  0: '',
  key1: '',
  key2: undefined,
};
interface MoreNarrowStrings {
  // Error
  // [i: number]: string | undefined;
  [i: string]: string;
}

/***********************************************************/

/*************************/
/*** Nested Interfaces ***/
/*************************/

/***********************************************************/
interface Novel {
  author: {
    name: string;
  };
  setting: Setting;
}
interface Setting {
  place: string;
  year: number;
}
let myNovel: Novel;
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
// Error
// myNovel = {
//   author: {
//     name: 'Emily Brontë',
//   },
//   setting: {
//     place: 'West Yorkshire',
//   },
// };

/***********************************************************/

export {};
