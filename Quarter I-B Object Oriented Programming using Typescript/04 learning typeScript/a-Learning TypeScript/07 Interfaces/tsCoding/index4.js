"use strict";
/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Read-Only Properties
const hasBoth = {
    property: () => '',
    method() {
        return '';
    },
};
hasBoth.property(); // Ok
hasBoth.method(); // Ok
