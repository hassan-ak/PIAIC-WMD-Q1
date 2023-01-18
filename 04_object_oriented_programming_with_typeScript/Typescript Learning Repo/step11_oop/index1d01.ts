/******************/
/*** step11_oop ***/
/******************/

/************************************************/

/*+++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++ Object Oriented Programming with TypeScript ++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++*/

/************************************************/
// person class
class Person {
  name: string = ''; // default
  age: number = 0; // default

  greetings() {
    return this.name + ' ' + this.age;
  }
}
// to create a new instance of a class
const person1: any = new Person();
person1.name = 'Kevin Odongo';
person1.age = 36;
// This should render Kevin Odongo 36
console.log(person1.greetings());

/************************************************/

/*------------------------------------------------*/
/*-- Principles of Object Oriented Programming  --*/
/*------------------------------------------------*/

/************************************************/

/*--------------------*/
/*--  Encapsulation --*/
/*--------------------*/

/************************************************/
// person object
class Person11 {
  name: string = '';
  age: number = 0;
}
// motor vehicle object
class Motor11 {
  make: string = '';
  model: string = '';
  color: string = '';
}
// create a new instance of each
const person11 = new Person11();
const motor11 = new Motor11();
// warning Property 'age' does not exist on type 'Motor'
// motor11.age();

/************************************************/

/*-----------------*/
/*-- Abstraction --*/
/*-----------------*/

/************************************************/
// person class object
class Person111 {
  public name: string = '';
  public age: string = '';
  public greetings() {
    return this.name + ' ' + this.age;
  }
}

/************************************************/
class Person21 {
  private readonly credentials: string = '';
  private name: string = '';
  private department: string = '';
  constructor(value: string) {
    this.credentials = value;
  }
  public setName(name: string): void {
    if (!this.credentials) return;
    this.name = name;
    // logic get department
    const userDepartment = 'axios.get(.....)';
    if (userDepartment) this.department = userDepartment;
  }
  public getName() {
    return `Employee name: ${this.name}, Department: ${this.department}`;
  }
}
// warining An argument for 'value' was not provided.
// const person21 = new Person21()
// this will succeed
const person22 = new Person21('123456');

/************************************************/

/*-----------------*/
/*-- Inheritance --*/
/*-----------------*/

/************************************************/
// class company
type Department = {
  name: string;
};
type Employee = {
  name: string;
  age: number;
};
class TeslaCompany {
  private static role = 'Admin';
  private readonly credentials: string = '';
  private departments: Department[] = [];
  private employees: Employee[] = [];
  constructor(cred: string) {
    this.credentials = cred;
  }
  addDepartment(value: Department) {
    this.departments = [...this.departments, value];
  }
  addEmployee(value: Employee) {
    this.employees = [...this.employees, value];
  }
}
class TeslaEmployee extends TeslaCompany {
  private new_employee: Employee = { name: '', age: 0 };
  public setName(name: Employee): void {
    this.new_employee = name;
  }
}
const newTeslaEmployee = new TeslaEmployee('123456');
newTeslaEmployee.setName({ name: 'Kevin Odongo', age: 36 });
newTeslaEmployee.addDepartment({ name: 'Finance' });
newTeslaEmployee.addEmployee({ name: 'Kevin Odongo', age: 36 });
console.log(newTeslaEmployee);

/************************************************/

/*-------------------*/
/*--  Polymorphism --*/
/*-------------------*/

/************************************************/
// class Person
class PersonA {
  public name: string = '';
  public role: string = '';
}

class basketballPlayer extends PersonA {
  public setName(name: string) {
    this.name = name;
    this.role = 'BasketBall Player';
  }
  public getName() {
    return `User name: ${this.name} Role: ${this.role}`;
  }
}

class golfPlayer extends PersonA {
  public setName(name: string) {
    this.name = name;
    this.role = 'Golf Player';
  }
  public getName() {
    return `User name: ${this.name} Role: ${this.role}`;
  }
}

const personA1 = new basketballPlayer();
const personA2 = new golfPlayer();
personA1.setName('Kevin Odongo');
personA2.setName('Kevin Odongo');
console.log(personA1.getName());
console.log(personA2.getName());

/************************************************/

export {};
