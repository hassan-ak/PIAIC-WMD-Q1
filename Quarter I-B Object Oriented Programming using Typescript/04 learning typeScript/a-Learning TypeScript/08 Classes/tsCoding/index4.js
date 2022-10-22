"use strict";
/*
    Chapter 8. Classes
    Class Properties
    Classes as Types
    Classes and Interfaces
    Extending a Class
    Abstract Classes
    Member Visibility
*/
//  Initialization Checking
class WithValue {
    //   unused: number;
    // Error: Property 'unused' has no initializer
    // and is not definitely assigned in the constructor.
    constructor() {
        this.immediate = 0; // Ok
        this.later = 1;
    }
}
class MissingInitializer {
}
// new MissingInitializer().property.length;
// TypeError: Cannot read property 'length' of undefined
