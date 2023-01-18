/*
    # Chapter 8. Classes
*/
/***********************************************************/

/*-----------------------*/
/*-- Extending a Class --*/
/*-----------------------*/

/***********************************************************/
class Teacher {
  teach() {
    console.log('The surest test of discipline is its absence.');
  }
}
class StudentTeacher extends Teacher {
  learn() {
    console.log('I cannot afford the luxury of a closed mind.');
  }
}
const teacher = new StudentTeacher();
teacher.teach(); // Ok (defined on base)
teacher.learn(); // Ok (defined on subclass)
// Error
// teacher.other();

/***********************************************************/

/*******************************/
/*** Extension Assignability ***/
/*******************************/

/***********************************************************/
class Lesson {
  subject: string;
  constructor(subject: string) {
    this.subject = subject;
  }
}
class OnlineLesson extends Lesson {
  url: string;
  constructor(subject: string, url: string) {
    super(subject);
    this.url = url;
  }
}
let lesson: Lesson;
lesson = new Lesson('coding'); // Ok
lesson = new OnlineLesson('coding', 'oreilly.com'); // Ok
let online: OnlineLesson;
online = new OnlineLesson('coding', 'oreilly.com'); // Ok
// Error
// online = new Lesson('coding');

/***********************************************************/
class PastGrades {
  grades: number[] = [];
}
class LabeledPastGrades extends PastGrades {
  label?: string;
}
let subClass: LabeledPastGrades;
subClass = new LabeledPastGrades(); // Ok
subClass = new PastGrades(); // Ok

/***********************************************************/

/*******************************/
/*** Overridden Constructors ***/
/*******************************/

/***********************************************************/
class GradeAnnouncer {
  message: string;
  constructor(grade: number) {
    this.message = grade >= 65 ? 'Maybe next time...' : 'You pass!';
  }
}
class PassingAnnouncer extends GradeAnnouncer {
  constructor() {
    super(100);
  }
}
class FailingAnnouncer extends GradeAnnouncer {
  // Error
  // constructor() {}
}

/***********************************************************/
class GradesTally {
  grades: number[] = [];
  addGrades(...grades: number[]) {
    this.grades.push(...grades);
    return this.grades.length;
  }
}
class ContinuedGradesTally extends GradesTally {
  constructor(previousGrades: number[]) {
    // Error
    // this.grades = [...previousGrades];
    super();
    console.log('Starting with length', this.grades.length); // Ok
  }
}

/***********************************************************/

/**************************/
/*** Overridden Methods ***/
/**************************/

/***********************************************************/
class GradeCounter {
  countGrades(grades: string[], letter: string) {
    return grades.filter((grade) => grade === letter).length;
  }
}
class FailureCounter extends GradeCounter {
  countGrades(grades: string[]) {
    return super.countGrades(grades, 'F');
  }
}
class AnyFailureChecker extends GradeCounter {
  // Error
  //   countGrades(grades: string[]) {
  //     return super.countGrades(grades, 'F') !== 0;
  //   }
}
const counter: GradeCounter = new AnyFailureChecker();
// Error
// const count = counter.countGrades(['A', 'C', 'F']);

/***********************************************************/

/*****************************/
/*** Overridden Properties ***/
/*****************************/

/***********************************************************/
class Assignment {
  grade?: number;
}
class GradedAssignment extends Assignment {
  grade: number;
  constructor(grade: number) {
    super();
    this.grade = grade;
  }
}

/***********************************************************/
class NumericGrade {
  value = 0;
}
class VagueGrade extends NumericGrade {
  // Error
  //   value = Math.random() > 0.5 ? 1 : '...';
}
const instance: NumericGrade = new VagueGrade();
instance.value;

/***********************************************************/

export {};
