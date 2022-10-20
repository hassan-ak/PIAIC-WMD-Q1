"use strict";
// *** Objects *** //
//// *** Unions of Object Types *** ////
/*
    Inferred Object-Type Unions
*/
const poem = Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true };
// Type:
// {
// name: string;
// pages: number;
// rhymes?: undefined;
// }
// |
// {
// name: string;
// pages?: undefined;
// rhymes: boolean;
// }
poem.name; // string
poem.pages; // number | undefined
poem.rhymes; // booleans | undefined
const poem2 = Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true };
poem2.name; // Ok
// poem2.pages;
// ~~~~~
// Property 'pages' does not exist on type 'Poem'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.
// poem2.rhymes;
// ~~~~~~
// Property 'rhymes' does not exist on type 'Poem'.
// Property 'rhymes' does not exist on type 'PoemWithPages'.
/*
    Narrowing Object Types
*/
if ('pages' in poem2) {
    poem2.pages; // Ok: poem is narrowed to PoemWithPages
}
else {
    poem2.rhymes; // Ok: poem is narrowed to PoemWithRhymes
}
const poem101 = Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7, type: 'pages' }
    : { name: 'Her Kind', rhymes: true, type: 'rhymes' };
if (poem101.type === 'pages') {
    console.log(`It's got pages: ${poem.pages}`); // Ok
}
else {
    console.log(`It rhymes: ${poem.rhymes}`);
}
poem101.type; // Type: 'pages' | 'rhymes'
// poem101.pages;
// ~~~~~
// Error: Property 'pages' does not exist on type 'Poem'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.
