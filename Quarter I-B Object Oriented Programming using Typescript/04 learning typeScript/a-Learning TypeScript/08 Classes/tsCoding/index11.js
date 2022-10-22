"use strict";
/*
    Chapter 8. Classes
    Classes and Interfaces
*/
//  Implementing Multiple Interfaces
class ReportCard {
    constructor(grades) {
        this.grades = grades;
    }
    report() {
        return this.grades.join(', ');
    }
}
// class AsNumber implements AgeIsANumber, AgeIsNotANumber {
//   age = 0;
//   // ~~~
//   // Error: Property 'age' in type 'AsNumber' is not assignable
//   // to the same property in base type 'AgeIsNotANumber'.
//   // Type 'number' is not assignable to type '() => string'.
// }
// class NotAsNumber implements AgeIsANumber, AgeIsNotANumber {
//   age() {
//     return '';
//   }
//   // ~~~
//   // Error: Property 'age' in type 'NotAsNumber' is not assignable
//   // to the same property in base type 'AgeIsANumber'.
//   // Type '() => string' is not assignable to type 'number'.
// }
