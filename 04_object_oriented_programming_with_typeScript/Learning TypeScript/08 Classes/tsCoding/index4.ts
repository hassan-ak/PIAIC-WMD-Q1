/*
    # Chapter 8. Classes
*/
/***********************************************************/

/*----------------------------*/
/*-- Classes and Interfaces --*/
/*----------------------------*/

/***********************************************************/
interface Learner {
  name: string;
  study(hours: number): void;
}
class Student implements Learner {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  study(hours: number) {
    for (let i = 0; i < hours; i += 1) {
      console.log('...studying...');
    }
  }
}

// Error
// class Slacker implements Learner {
//   name = 'Rocky';
// }

/***********************************************************/
// Error
// class Student implements Learner {
//   name;
//   study(hours) {
//   }
// }

/***********************************************************/

/****************************************/
/*** Implementing Multiple Interfaces ***/
/****************************************/

/***********************************************************/
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
// Error
// class Empty implements Graded, Reporter {}

/***********************************************************/
interface AgeIsANumber {
  age: number;
}
interface AgeIsNotANumber {
  age: () => string;
}
// Error
// class AsNumber implements AgeIsANumber, AgeIsNotANumber {
//   age = 0;
// }
// class NotAsNumber implements AgeIsANumber, AgeIsNotANumber {
//   age() {
//     return '';
//   }
// }

/***********************************************************/

export {};
