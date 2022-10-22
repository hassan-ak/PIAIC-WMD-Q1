"use strict";
/*
    Chapter 9. Type Modifiers
    Type Operators
*/
//    keyof typeof
const ratings2 = {
    imdb: 8.4,
    metacritic: 82,
};
function logRating(key) {
    console.log(ratings2[key]);
}
logRating('imdb'); // Ok
// logRating('invalid');
// ~~~~~~~~~
// Error: Argument of type '"missing"' is not assignable
// to parameter of type '"imdb" | "metacritic"'.
