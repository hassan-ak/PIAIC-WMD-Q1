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
  immediate = 0; // Ok
  later: number; // Ok (set in the constructor)
  mayBeUndefined: number | undefined; // Ok (allowed to be undefined)
  //   unused: number;
  // Error: Property 'unused' has no initializer
  // and is not definitely assigned in the constructor.
  constructor() {
    this.later = 1;
  }
}

class MissingInitializer {
  property: string | undefined;
}
// new MissingInitializer().property.length;
// TypeError: Cannot read property 'length' of undefined
