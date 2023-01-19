/*
    Create a Class Object
*/

// Define a Student class
class Student {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }
  setName(newName) {
    this.fullName = newName;
  }
  setAge(newAge) {
    this.age = newAge;
  }
}

// create student instance
let student1 = new Student('Hassan ali Khan', 30);

// use class/student properties
console.log(student1.fullName);
console.log(student1.age);

// use class/student methods
student1.setName('Zuabir Hafeez');
student1.setAge(26);

// use class/student updated properties
console.log(student1.fullName);
console.log(student1.age);
