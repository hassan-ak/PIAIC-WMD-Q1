"use strict";
/*
    Chapter 8. Classes
    Member Visibility
*/
var _Base_truePrivate;
class Base {
    constructor() {
        this.isPublicImplicit = 0;
        this.isPublicExplicit = 1;
        this.isProtected = 2;
        this.isPrivate = 3;
        _Base_truePrivate.set(this, 4);
    }
}
_Base_truePrivate = new WeakMap();
class Subclass extends Base {
    examples() {
        this.isPublicImplicit; // Ok
        this.isPublicExplicit; // Ok
        this.isProtected; // Ok
        // this.isPrivate;
        // Error: Property 'isPrivate' is private
        // and only accessible within class 'Base'.
        // this.#truePrivate;
        // Property '#truePrivate' is not accessible outside
        // class 'Base' because it has a private identifier.
    }
}
new Subclass().isPublicImplicit; // Ok
new Subclass().isPublicExplicit; // Ok
// new Subclass().isProtected;
// ~~~~~~~~~~~
// Error: Property 'isProtected' is protected
// and only accessible within class 'Base' and its subclasses.
// new Subclass().isPrivate;
// ~~~~~~~~~~~
// Error: Property 'isPrivate' is private
// and only accessible within class 'Base'.
class TwoKeywords {
    constructor() {
        this.name = 'Anne Sullivan'; // Ok
    }
    log() {
        console.log(this.name); // Ok
    }
}
const two = new TwoKeywords();
// two.name = "Savitribai Phule";
// ~~~~
// Error: Property 'name' is private and
// only accessible within class 'TwoKeywords'.
// ~~~~
// Error: Cannot assign to 'name'
// because it is a read-only property.
