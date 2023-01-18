"use strict";
/*
    Chapter 4. Objects
*/
/***********************************************************/
/*----------------------------*/
/*-- Unions of Object Types --*/
/*----------------------------*/
/***********************************************************/
/***********************************/
/*** Inferred Object-Type Unions ***/
/***********************************/
/***********************************************************/
const poem = Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true };
poem.name; // string
poem.pages; // number | undefined
poem.rhymes; // booleans | undefined
const poem3 = Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true };
poem3.name; // Ok
// Error
// // poem3.pages;
// Error
// // poem3.rhymes;
/***********************************************************/
/******************************/
/*** Narrowing Object Types ***/
/******************************/
/***********************************************************/
if ('pages' in poem3) {
    poem3.pages; // Ok: poem is narrowed to PoemWithPages
}
else {
    poem3.rhymes; // Ok: poem is narrowed to PoemWithRhymes
}
const poem4 = Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7, type: 'pages' }
    : { name: 'Her Kind', rhymes: true, type: 'rhymes' };
if (poem4.type === 'pages') {
    console.log(`It's got pages: ${poem4.pages}`); // Ok
}
else {
    console.log(`It rhymes: ${poem4.rhymes}`);
}
poem4.type; // Type: 'pages' | 'rhymes'
poem.pages;
/***********************************************************/
