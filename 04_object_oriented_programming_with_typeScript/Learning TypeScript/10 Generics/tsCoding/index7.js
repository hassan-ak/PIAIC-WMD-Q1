"use strict";
/*
    # Chapter 10. Generics
*/
Object.defineProperty(exports, "__esModule", { value: true });
function logWithLength(input) {
    console.log(`Length: ${input.length}`);
    return input;
}
logWithLength('No one can figure out your worth but you.'); // Type: string
logWithLength([false, true]); // Type: boolean[]
logWithLength({ length: 123 }); // Type: { length: number }
// logWithLength(new Date());
/***********************************************************/
/*********************************************/
/*** keyof and Constrained Type Parameters ***/
/*********************************************/
/***********************************************************/
function get(container, key) {
    return container[key];
}
const roles = {
    favorite: 'Fargo',
    others: ['Almost Famous', 'Burn After Reading', 'Nomadland'],
};
const favorite = get(roles, 'favorite'); // Type: string
const others = get(roles, 'others'); // Type: string[]
// const missing = get(roles, 'extras');
/***********************************************************/
function get1(container, key) {
    return container[key];
}
const roles1 = {
    favorite: 'Fargo',
    others: ['Almost Famous', 'Burn After Reading', 'Nomadland'],
};
const found = get1(roles, 'favorite'); // Type: string | string[]
