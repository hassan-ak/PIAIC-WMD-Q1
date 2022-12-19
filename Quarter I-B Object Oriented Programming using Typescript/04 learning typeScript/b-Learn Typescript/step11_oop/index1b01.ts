/******************/
/*** step11_oop ***/
/******************/

/************************************************/

/*+++++++++++++++++++++++++++++++++++++++++++++++*/
/*++ Object-Oriented Programming in TypeScript ++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++*/

/************************************************/

/*-------------*/
/*-- Classes --*/
/*-------------*/

/************************************************/
class Car {
  model: string | undefined;
  year: number | undefined;
  price: string | undefined;
  drive() {
    console.log('The Car has Started driving');
  }
  stop() {
    console.log('The car has stopped');
  }
}
const tesla = new Car();
tesla.model = 'Model X';
tesla.year = 2022;
tesla.price = '$114,990';
tesla.drive();
tesla.stop();

/************************************************/

/*-------------*/
/*-- Classes --*/
/*-------------*/

/************************************************/
class A {
  variable: string;
  constructor(variable: string) {
    this.variable = variable;
  }
}
const object = new A('value');

/************************************************/

/*-----------------*/
/*-- Inheritance --*/
/*-----------------*/

/************************************************/
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`What's for dinner?`);
  }
  speak() {
    console.log(`My name is ${this.name}, I am ${this.age} years old`);
  }
}
class Chef extends Person {
  occupation: string;
  constructor(name: string, age: number, occupation: string) {
    super(name, age);
    this.occupation = occupation;
  }
  speak(): void {
    console.log(`I am a ${this.occupation}`);
  }
  cook() {
    console.log(`I am cooking`);
  }
}

/************************************************/

/*---------------------------*/
/*-- Extends vs Implements --*/
/*---------------------------*/

/************************************************/
class Human {
  name: string;
  gender: string;
  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
  speak() {
    return `I am speaking`;
  }
}
class Doctor implements Human {
  name: string;
  gender: string;
  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
  speak() {
    return 'I am a doctor';
  }
}

/************************************************/

/*---------------------------------------------------*/
/*-- Overriding and Extending Inherited Properties --*/
/*---------------------------------------------------*/

/************************************************/
class AA {
  print() {
    console.log('I am class A');
  }
}
class BB extends AA {
  print() {
    console.log('I am class B');
  }
}

/************************************************/
class BB1 extends AA {
  print() {
    super.print(); //I am class A
    console.log('I am class B');
  }
}
const object1 = new BB1();
object1.print(); // I am class A, I am class B

/************************************************/

/*-----------------------------*/
/*-- Deadly Diamond of Death --*/
/*-----------------------------*/

/************************************************/
class A1 {}
class B1 extends A1 {}
class C1 extends A1 {}
// This will throw an error
// class D1 extends B1, C1 {};

/************************************************/
class A2 {}
class B2 extends A2 {}
class C2 extends A2 {}
// This will throw an error
// class D2 extends B2, C2 {};

/************************************************/

/*-------------------*/
/*-- Encapsulation --*/
/*-------------------*/

/************************************************/

/*----------------------*/
/*-- Access Modifiers --*/
/*----------------------*/

/************************************************/
class AAA {
  static index: number = 1;
}
AAA.index; // 1

/************************************************/

/*-----------------------------------------------------------*/
/*-- Initializing Instance Variables with Access Modifiers --*/
/*-----------------------------------------------------------*/

/************************************************/
class A12 {
  constructor(public variable: string) {}
}
const object12 = new A12('value');

/************************************************/

/*-------------------------*/
/*-- Setters and Getters --*/
/*-------------------------*/

/************************************************/
class A13 {
  private _variable: string;
  constructor(variable: string) {
    this._variable = variable;
  }
  get variable(): string {
    return this._variable;
  }
  set variable(value: string) {
    if (value === '') throw new Error('Variable cannot be an empty string');
    this._variable = value;
  }
}
//setting the variableobject.variable = 'different string'
//getting the variableconsole.log(object.variable)
const object13 = new A13('string');

/************************************************/

/*------------------*/
/*-- Polymorphism --*/
/*------------------*/

/************************************************/
class A41 {
  name: string = 'Class A';
  print() {
    console.log('I am class A');
  }
}
class B41 extends A41 {
  name: string = 'Class B';
  print() {
    console.log('I am class B');
  }
}

/************************************************/

export {};
