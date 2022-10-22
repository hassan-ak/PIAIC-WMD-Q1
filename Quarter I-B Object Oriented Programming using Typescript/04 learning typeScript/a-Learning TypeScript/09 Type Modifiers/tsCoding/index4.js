"use strict";
/*
    Chapter 9. Type Modifiers
    Type Operators
*/
//  keyof
function getRating(ratings, key) {
    return ratings[key]; // Ok
}
const ratings = { audience: 66, critics: 84 };
getRating(ratings, 'audience'); // Ok
// getRating(ratings, 'not valid');
// ~~~~~~~~~~~
// Error: Argument of type '"not valid"' is not
// assignable to parameter of type '"audience" | "critic"'.
function getCountKeyof(ratings, key) {
    return ratings[key]; // Ok
}
const ratings1 = { audience: 66, critics: 84 };
getCountKeyof(ratings1, 'audience'); // Ok
// getCountKeyof(ratings1, 'not valid');
// ~~~~~~~~~~~
// Error: Argument of type '"not valid"' is not
// assignable to parameter of type 'keyof Ratings'.
