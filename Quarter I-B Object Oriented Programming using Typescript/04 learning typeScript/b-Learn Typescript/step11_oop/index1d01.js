"use strict";
/******************/
/*** step11_oop ***/
/******************/
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************/
/*+++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++ Object Oriented Programming with TypeScript ++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++*/
/************************************************/
// person class
class Person {
    name = ''; // default
    age = 0; // default
    greetings() {
        return this.name + ' ' + this.age;
    }
}
// to create a new instance of a class
const person1 = new Person();
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
    name = '';
    age = 0;
}
// motor vehicle object
class Motor11 {
    make = '';
    model = '';
    color = '';
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
    name = '';
    age = '';
    greetings() {
        return this.name + ' ' + this.age;
    }
}
/************************************************/
class Person21 {
    credentials = '';
    name = '';
    department = '';
    constructor(value) {
        this.credentials = value;
    }
    setName(name) {
        if (!this.credentials)
            return;
        this.name = name;
        // logic get department
        const userDepartment = 'axios.get(.....)';
        if (userDepartment)
            this.department = userDepartment;
    }
    getName() {
        return `Employee name: ${this.name}, Department: ${this.department}`;
    }
}
// warining An argument for 'value' was not provided.
// const person21 = new Person21()
// this will succeed
const person22 = new Person21('123456');
class TeslaCompany {
    static role = 'Admin';
    credentials = '';
    departments = [];
    employees = [];
    constructor(cred) {
        this.credentials = cred;
    }
    addDepartment(value) {
        this.departments = [...this.departments, value];
    }
    addEmployee(value) {
        this.employees = [...this.employees, value];
    }
}
class TeslaEmployee extends TeslaCompany {
    new_employee = { name: '', age: 0 };
    setName(name) {
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
    name = '';
    role = '';
}
class basketballPlayer extends PersonA {
    setName(name) {
        this.name = name;
        this.role = 'BasketBall Player';
    }
    getName() {
        return `User name: ${this.name} Role: ${this.role}`;
    }
}
class golfPlayer extends PersonA {
    setName(name) {
        this.name = name;
        this.role = 'Golf Player';
    }
    getName() {
        return `User name: ${this.name} Role: ${this.role}`;
    }
}
const personA1 = new basketballPlayer();
const personA2 = new golfPlayer();
personA1.setName('Kevin Odongo');
personA2.setName('Kevin Odongo');
console.log(personA1.getName());
console.log(personA2.getName());
