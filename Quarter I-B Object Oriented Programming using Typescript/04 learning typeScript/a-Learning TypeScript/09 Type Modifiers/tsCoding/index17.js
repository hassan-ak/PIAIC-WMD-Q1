"use strict";
/*
    Chapter 9. Type Modifiers
    Const Assertions
*/
//  Read-Only Objects
function describePreference(preference) {
    switch (preference) {
        case 'maybe':
            return 'I suppose...';
        case 'no':
            return 'No thanks.';
        case 'yes':
            return 'Yes please!';
    }
}
// Type: { movie: string, standup: string }
const preferencesMutable = {
    movie: 'maybe',
    standup: 'yes',
};
// describePreference(preferencesMutable.movie);
// ~~~~~~~~~~~~~~~~~~~~~~~~
// Error: Argument of type 'string' is not assignable
// to parameter of type '"maybe" | "no" | "yes"'.
preferencesMutable.movie = 'no'; // Ok
// Type: readonly { readonly movie: "maybe", readonly standup: "yes" }
const preferencesReadonly = {
    movie: 'maybe',
    standup: 'yes',
};
describePreference(preferencesReadonly.movie); // Ok
// preferencesReadonly.movie = "no";
// ~~~~~
// Error: Cannot assign to 'movie' because it is a read-only property.
