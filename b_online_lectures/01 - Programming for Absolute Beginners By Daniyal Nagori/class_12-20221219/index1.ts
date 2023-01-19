/***********************************************/
class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(something: string) {
    console.log(`${this.name} is eating ${something}`);
  }
}
let dog1 = new Dog('Tonny');
let dog2 = new Dog('Jack');

console.log(dog1);
console.log(dog2);
dog1.eat('food');
dog2.eat('chicken');

/***********************************************/

class Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + ' is a Human and is eating');
  }
}
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + ' is a Animal and is eating');
  }
}
class WildAnimal {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  eat() {
    console.log(this.title + ' is a Wild Animal and is eating');
  }
}
class Robot {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
let h: Human = new Human('Tom');
let a: Animal = new Animal('Goat');
let r: Robot = new Robot('R2-D2');

/***********************************************/
class Base {
  k = 4;
  constructor(t: number) {}
}
class Derived extends Base {
  name: string = 'Ali';
  constructor() {
    super(5);
    console.log(this.k);
  }
}

let d = new Derived();
console.log(d.k, d.name);

/***********************************************/
class Point {
  x = 10;
  y = 10;
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
let p = new Point();
console.log(p.scale(21));

/***********************************************/
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
let c = new C();
console.log(c.length);
c.length = 12;

/***********************************************/
class Calc {
  num1!: number;
  num2!: number;
  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }
  add() {
    return this.num1 + this.num2;
  }
  subtract() {
    return this.num1 - this.num2;
  }
  mul() {
    return this.num1 * this.num2;
  }
  div() {
    return this.num1 / this.num2;
  }
}
let class_cal = new Calc(8, 3);
console.log(class_cal.add());
console.log(class_cal.subtract());
console.log(class_cal.mul());
console.log(class_cal.div());

/***********************************************/

export {};
