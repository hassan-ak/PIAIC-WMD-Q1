"use strict";
/*
    Chapter 8. Classes
    Class Properties
*/
//  Optional Properties
var _a;
class MissingInitializer1 {
}
(_a = new MissingInitializer1().property) === null || _a === void 0 ? void 0 : _a.length; // Ok
// new MissingInitializer1().property.length;
// Error: Object is possibly 'undefined'.
