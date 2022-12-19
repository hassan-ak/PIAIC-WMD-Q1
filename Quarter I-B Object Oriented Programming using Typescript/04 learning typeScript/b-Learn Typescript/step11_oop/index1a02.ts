/******************/
/*** step11_oop ***/
/******************/

/************************************************/

/*+++++++++++++*/
/*++ Classes ++*/
/*+++++++++++++*/

/************************************************/

/*--------------------*/
/*-- Class Heritage --*/
/*--------------------*/

/************************************************/

/*
    implements Clauses
*/

/************************************************/
// classes can inherit from base classes
// implements to check if class satifies a particular interface
// classes can implemnet multiple interfaces
interface Pingable {
  ping(): void;
}
class Sonar implements Pingable {
  ping() {
    console.log('ping!');
  }
}
// Ball class gives ann error
// ping method not defined
// class Ball implements Pingable {
//   pong() {
//     console.log("pong!");
//   }
// }

/************************************************/

/*
    Cautions
*/

/************************************************/
// implements clause only check the class to follow an interface
// it don't change the implementation
interface Checkable {
  check(name: string): boolean;
}
// Error as check method expect name parameter
// class NameChecker implements Checkable {
//   check(s) {
//     return s.toLowercse() === 'ok';
//   }
// }

/************************************************/
interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
// y is optional and only avaialable in interface
// y not defined in class C
// c.y = 10;

/************************************************/

/*
    extends Clauses
*/

/************************************************/
// extend a class based on other
// super to be called if using base in constructor
class Animal {
  test = 21;
  move() {
    console.log('Moving along!');
  }
}
class Dog extends Animal {
  constructor() {
    super();
    console.log(this.test, 'woof!');
  }
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      this.move();
    }
  }
}
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);

/************************************************/

/*
    Overriding Methods
*/

/************************************************/
// We can override properties or methods
class Base {
  greet() {
    console.log('Hello, world!');
  }
}
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
const dd = new Derived();
dd.greet();
dd.greet('reader');

// refer to derived class through base
// Alias the derived instance through a base class reference
const bb: Base = dd;
// No problem
bb.greet();

/************************************************/
class Base1 {
  greet() {
    console.log('Hello, w-o-r-l-d!');
  }
}
// trying to chnage base method
// changing base method not allowed
class Derived1 extends Base1 {
  // Make this parameter required
  // greet(name: string) {
  //   console.log(`Hello, ${name.toUpperCase()}`);
  // }
}
const bbb: Base = new Derived1();
// Crashes because "name" will be undefined
bbb.greet();

/************************************************/

/*
    Type-only Field Declarations
*/

/************************************************/
interface Animal {
  dateOfBirth: any;
}
interface Dog extends Animal {
  breed: any;
}
class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}
class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}

/************************************************/

/*
    Initialization Order
*/

/************************************************/
class BaseB {
  name = 'base';
  constructor() {
    console.log('My name is ' + this.name);
  }
}
class DerivedD extends BaseB {
  name = 'derived';
}
// Prints "base", not "derived"
const dD = new DerivedD();

/************************************************/

/*
    Inheriting Built-in Types
*/

/************************************************/
// Method may be undefined here
class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return 'hello ' + this.message;
  }
}

/************************************************/
class MsgError1 extends Error {
  constructor(m: string) {
    super(m);
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MsgError1.prototype);
  }
  sayHello() {
    return 'hello ' + this.message;
  }
}

/************************************************/

export{}