"use strict";
/*
    # Chapter 10. Generics
*/
Object.defineProperty(exports, "__esModule", { value: true });
let stringyBox = {
    inside: 'abc',
};
let numberBox = {
    inside: 123,
};
function getLast(node) {
    return node.next ? getLast(node.next) : node.value;
}
// Inferred Value type argument: Date
let lastDate = getLast({
    value: new Date('09-13-1993'),
});
// Inferred Value type argument: string
let lastFruit = getLast({
    next: {
        value: 'banana',
    },
    value: 'apple',
});
