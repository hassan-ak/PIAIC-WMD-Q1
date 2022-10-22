/*
    Chapter 8. Classes
    Member Visibility
*/

class Base {
  isPublicImplicit = 0;
  public isPublicExplicit = 1;
  protected isProtected = 2;
  private isPrivate = 3;
  #truePrivate = 4;
}
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
  private readonly name: string;
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
