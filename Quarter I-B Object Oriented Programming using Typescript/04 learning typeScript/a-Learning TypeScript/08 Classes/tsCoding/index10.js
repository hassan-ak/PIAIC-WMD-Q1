"use strict";
/*
    Chapter 8. Classes
    Classes and Interfaces
*/
class Student {
    constructor(name) {
        this.name = name;
    }
    study(hours) {
        for (let i = 0; i < hours; i += 1) {
            console.log('...studying...');
        }
    }
}
// class Slacker implements Learner {
//   // ~~~~~~~
//   // Error: Class 'Slacker' incorrectly implements interface 'Learner'.
//   // Property 'study' is missing in type 'Slacker'
//   // but required in type 'Learner'.
//   name = 'Rocky';
// }
// class Student1 implements Learner {
//   name;
//   // Error: Member 'name' implicitly has an 'any' type.
//   study(hours) {
//     // Error: Parameter 'hours' implicitly has an 'any' type.
//   }
// }
