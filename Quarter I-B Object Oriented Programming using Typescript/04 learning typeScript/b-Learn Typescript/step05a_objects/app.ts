// step05a_objects

/*--------------------------------------------------------------*/
// Can b Annaonumas
let person: {
  name: string;
  age: number;
};

// Using Interfaces
interface Person1 {
  name: string;
  age: number;
}
let person1: Person1;

// Using Types
type Person2 = {
  name: string;
  age: number;
};
let person2: Person2;

/*--------------------------------------------------------------*/
// Type inference
let teacher = {
  name: 'Zeeshan',
  experience: '10',
};
console.log(teacher.name);
console.log(teacher['experience']);
console.log(teacher.experience);

/*--------------------------------------------------------------*/
// Type Declaration
let student: {
  name: string;
  age: number;
};
student = {
  name: 'Hira',
  age: 30,
};
console.log(student['name']);
console.log(student.name);
console.log(student.age);

/*--------------------------------------------------------------*/
// Optional Properties
interface PaintOptions {
  shape: string;
  xPos?: number;
  yPos?: number;
}
let shapes1: PaintOptions = { shape: 'shape' };
let shapes2: PaintOptions = { shape: 'shape', xPos: 100 };
let shapes3: PaintOptions = { shape: 'shape', yPos: 100 };
let shapes4: PaintOptions = { shape: 'shape', xPos: 100, yPos: 100 };

/*--------------------------------------------------------------*/
// ReadOnly
interface SomeType {
  readonly prop: string;
}
let shapes5: SomeType = { prop: 't' };
// Error
// // shapes5.prop = '25';

/*--------------------------------------------------------------*/
// ReadOnly as muteable
interface SomeType1 {
  readonly prop: { name: string; age: number };
}
let shapes6: SomeType1 = { prop: { name: 'Hassan', age: 30 } };
// Error
// shapes6.prop = { name: 'ALi', age: 26 };
shapes6.prop.name = 'Ali';

/*--------------------------------------------------------------*/
// Change through allising
interface Person {
  name: string;
  age: number;
}
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
let writablePerson: Person = {
  name: 'Person McPersonface',
  age: 42,
};
// works
let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'

/*--------------------------------------------------------------*/
// Index Signatures
interface StringArray {
  [index: number]: string;
}
let a: StringArray = { 1: 'Ali' };
// Error
// // let a: StringArray = { "1": 'Ali' };

interface NumberDictionary {
  [index: string]: number;
  length: number; // ok
  // Error
  // // name: string;
}
let b: NumberDictionary = {
  hello: 123,
  length: 11,
};
// Error
// // let b: NumberDictionary = {
// //   hello: '123',
// //   length: 11,
// // };

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

interface StringArray1 {
  readonly [index: number]: string;
}

/*--------------------------------------------------------------*/
// Extending Types
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
interface AddressWithUnit {
  name?: string;
  unit: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
interface AddressWithUnit1 extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
interface ColorfulCircle extends Colorful, Circle {}

/*--------------------------------------------------------------*/
// Intersection Types
interface Colorful1 {
  color: string;
}
interface Circle1 {
  radius: number;
}
type ColorfulCircle1 = Colorful & Circle;

/*--------------------------------------------------------------*/
// Generic Object Types
interface Box {
  contents: any;
}

interface Box1 {
  contents: unknown;
}
let x: Box1 = {
  contents: 'hello world',
};

interface Box2<Type> {
  contents: Type;
}
let box1: Box2<string>;
let box2: Box2<number>;
let box3: Box2<boolean>;

/*--------------------------------------------------------------*/
