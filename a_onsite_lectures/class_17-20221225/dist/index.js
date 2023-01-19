/****************/
/*** Class 17 ***/
/****************/
console.clear();
console.log('/*******************************/');
/************************************************/
class IdGenerator {
    static _id = 100;
    static createID() {
        let temp = IdGenerator._id;
        IdGenerator._id += 1;
        return temp;
    }
}
class Employee {
    _userId;
    constructor() {
        this._userId = IdGenerator.createID();
    }
}
for (let i = 0; i < 10; i++) {
    let e = new Employee();
    console.log(e);
}
console.log('/*******************************/');
/************************************************/
class Employee1 {
    _name;
    _id;
    static _autoId = 0;
    constructor(name) {
        this._name = name;
        this._id = ++Employee1._autoId;
    }
    print() {
        console.log(`${this._name} and ID is ${this._id}`);
    }
}
const p1 = new Employee1('Zia');
const p2 = new Employee1('Hassan');
const p3 = new Employee1('Umar');
const p4 = new Employee1('Ali');
p1.print();
p2.print();
p3.print();
p4.print();
console.log('/*******************************/');
/************************************************/
class Employee2 {
    _name;
    _id;
    static _autoId = 1;
    constructor(name) {
        this._name = name;
        this._id = Employee2._autoId;
        Employee2._autoId += 2;
    }
    print() {
        console.log(`${this._name} and ID is ${this._id}`);
    }
}
const p11 = new Employee2('Zia');
const p12 = new Employee2('Hassan');
const p13 = new Employee2('Umar');
const p14 = new Employee2('Ali');
p11.print();
p12.print();
p13.print();
p14.print();
console.log('/*******************************/');
/************************************************/
class Box {
    content;
    test;
    constructor(value, testValue) {
        this.content = value;
        this.test = testValue;
    }
}
const m1 = new Box('Hello, world', 21);
const m2 = new Box(298, 'H');
const m3 = new Box(true, 1);
console.log('/*******************************/');
/************************************************/
// Class Problem
class Empl {
    _id;
    _age;
    _name;
    static id = 0;
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._id = 'emp-' + (++Empl.id).toString();
    }
}
class Std {
    _id;
    _department;
    _name;
    static id = 0;
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._id = 'std-' + (++Std.id).toString();
    }
}
class Tec {
    _id;
    _name;
    static id = 0;
    constructor(name) {
        this._name = name;
        this._id = 'tec-' + (++Tec.id).toString();
    }
}
class Collection {
    collection = new Map();
    static id = 0;
    constructor(entries) {
        if (entries) {
            entries.map((entry) => {
                this.collection.set('coll-' + (++Std.id).toString(), entry);
            });
        }
    }
    addEntry(item) {
        this.collection.set('coll-' + (++Std.id).toString(), item);
    }
    getItem(id) {
        return this.collection.get(id);
    }
    getAllItems() {
        return [...this.collection.values()];
    }
}
let empl1 = new Empl('Hassan', 28);
let empl2 = new Empl('Ali', 24);
let empl3 = new Empl('Khan', 20);
let employeCollection = new Collection([empl1, empl2, empl3]);
employeCollection.addEntry(new Empl('Umar', 20));
console.log(employeCollection.getItem('coll-1'));
console.log(employeCollection.getAllItems());
console.log('/*******************************/');
/************************************************/
let tec1 = new Tec('Hassan');
let tec2 = new Tec('Ali');
let tec3 = new Tec('Khan');
let teacherCollection = new Collection([tec1, tec2, tec3]);
teacherCollection.addEntry(new Tec('Umar'));
console.log(teacherCollection.getItem('coll-5'));
console.log(teacherCollection.getAllItems());
console.log('/*******************************/');
/************************************************/
class Base {
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
console.log('/*******************************/');
export {};
