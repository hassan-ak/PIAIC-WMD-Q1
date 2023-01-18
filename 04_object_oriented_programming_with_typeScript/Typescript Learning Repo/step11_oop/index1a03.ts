/******************/
/*** step11_oop ***/
/******************/

/************************************************/

/*+++++++++++++*/
/*++ Classes ++*/
/*+++++++++++++*/

/************************************************/

/*-----------------------*/
/*-- Member Visibility --*/
/*-----------------------*/

/************************************************/

/*
    public
*/

/************************************************/
// public member can be accessed any where
class Greeter {
  public greet() {
    console.log('hi!');
  }
}
const g = new Greeter();
g.greet();

/************************************************/

/*
    protected
*/

/************************************************/
// only avaialble in subclasses
class Greeter1 {
  public greet() {
    console.log('Hello, ' + this.getName());
  }
  protected getName() {
    return 'hi';
  }
}
class SpecialGreeter extends Greeter1 {
  public howdy() {
    // OK to access protected member here
    console.log('Howdy, ' + this.getName());
  }
}
const gg = new SpecialGreeter();
// OK
gg.greet();
gg.howdy();
// Error
// gg.getName();

/************************************************/

/*
    Exposure of protected members
*/

/************************************************/
class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Derived();
console.log(d.m); // OK

/************************************************/

/*
    Cross-hierarchy protected access
*/

/************************************************/
class BaseB {
  protected x: number = 1;
}
class Derived1 extends BaseB {
  protected x: number = 5;
}
class Derived2 extends BaseB {
  f1(other: Derived2) {
    other.x = 10;
  }
  // Error Protected member cant be accessed here
  // f2(other: BaseB) {
  //   other.x = 10;
  // }
}

/************************************************/

/*
    private
*/

/************************************************/
// no access outside class
class Base101 {
  private x = 0;
}
const bbb = new Base101();
// Can't access from outside the class
// console.log(bbb.x);

class Derived101 extends Base101 {
  showX() {
    // Can't access in subclasses
    // console.log(this.x);
  }
}

class Baset {
  private x = 0;
}
// Error
// class Derivedt extends Baset {
//   x = 1;
// }

/************************************************/

/*
    Cross-instance private access
*/

/************************************************/
class A {
  private x = 10;
  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}

/************************************************/

/*
    Caveats
*/

/************************************************/
// private and protected are for ts only

/************************************************/
// can access using bracket notation
class MySafe {
  private secretKey = 12345;
}
const s = new MySafe();
// Error
// Not allowed during type checking
// console.log(s.secretKey);
// OK
console.log(s['secretKey']);

/************************************************/
// using # make a member hard private
class Dog {
  #barkAmount = 0;
  personality = 'happy';
  constructor() {}
}

/************************************************/

export {};
