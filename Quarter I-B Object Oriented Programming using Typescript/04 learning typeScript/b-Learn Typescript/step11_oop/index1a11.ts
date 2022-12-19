/******************/
/*** step11_oop ***/
/******************/

/************************************************/

/*+++++++++++++*/
/*++ Classes ++*/
/*+++++++++++++*/

/************************************************/

/*----------------------------------*/
/*-- abstract Classes and Members --*/
/*----------------------------------*/

/************************************************/
// abstract has no implementation provided
// purpose is as base for subclasses
abstract class Base {
  abstract getName(): string;
  printName() {
    console.log('Hello, ' + this.getName());
  }
}
// Error
// const b = new Base();
class Derived extends Base {
  getName() {
    return 'world';
  }
}
const d = new Derived();
d.printName();

/************************************************/

export {};
