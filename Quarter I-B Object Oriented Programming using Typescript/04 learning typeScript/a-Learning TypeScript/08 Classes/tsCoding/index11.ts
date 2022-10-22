/*
    Chapter 8. Classes
    Classes and Interfaces
*/
//  Implementing Multiple Interfaces

interface Graded {
  grades: number[];
}
interface Reporter {
  report: () => string;
}
class ReportCard implements Graded, Reporter {
  grades: number[];
  constructor(grades: number[]) {
    this.grades = grades;
  }
  report() {
    return this.grades.join(', ');
  }
}
// class Empty implements Graded, Reporter {}
// ~~~~~
// Error: Class 'Empty' incorrectly implements interface 'Graded'.
// Property 'grades' is missing in type 'Empty'
// but required in type 'Graded'.
// ~~~~~
// Error: Class 'Empty' incorrectly implements interface 'Reporter'.
// Property 'report' is missing in type 'Empty'
// but required in type 'Reporter'.

interface AgeIsANumber {
  age: number;
}
interface AgeIsNotANumber {
  age: () => string;
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
