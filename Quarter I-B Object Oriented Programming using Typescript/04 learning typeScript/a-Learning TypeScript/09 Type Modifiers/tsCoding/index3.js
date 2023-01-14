"use strict";
/*
    # Chapter 9. Type Modifiers
*/
/***********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function getRating(ratings, key) {
    // return ratings[key];
}
const ratings = { audience: 66, critics: 84 };
getRating(ratings, 'audience'); // Ok
getRating(ratings, 'not valid'); // Ok, but shouldn't be
/***********************************************************/
function getCountLiteral(ratings, key) {
    return ratings[key]; // Ok
}
const ratings1 = { audience: 66, critics: 84 };
getCountLiteral(ratings1, 'audience'); // Ok
// getCountLiteral(ratings1, 'not valid');
/***********************************************************/
function getCountKeyof(ratings, key) {
    return ratings[key]; // Ok
}
const ratings2 = { audience: 66, critics: 84 };
getCountKeyof(ratings2, 'audience'); // Ok
// getCountKeyof(ratings2, 'not valid');
/***********************************************************/
/**************/
/*** typeof ***/
/**************/
/***********************************************************/
const original = {
    medium: 'movie',
    title: 'Mean Girls',
};
let adaptation;
if (Math.random() > 0.5) {
    adaptation = Object.assign(Object.assign({}, original), { medium: 'play' }); // Ok
}
else {
    // Error: Type 'number' is not assignable to type 'string'.
    // adaptation = { ...original, medium: 2 };
}
/***********************************************************/
/*+++++++++++++++++++*/
/*+++ keyof typeof ++*/
/*+++++++++++++++++++*/
/***********************************************************/
const ratings101 = {
    imdb: 8.4,
    metacritic: 82,
};
function logRating(key) {
    console.log(ratings101[key]);
}
logRating('imdb'); // Ok
