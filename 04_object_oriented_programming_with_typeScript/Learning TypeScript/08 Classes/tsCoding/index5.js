"use strict";
/*
    # Chapter 8. Classes
*/
/***********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
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
    constructor(subject) {
        this.subject = subject;
    }
}
class OnlineLesson extends Lesson {
    constructor(subject, url) {
        super(subject);
        this.url = url;
    }
}
let lesson;
lesson = new Lesson('coding'); // Ok
lesson = new OnlineLesson('coding', 'oreilly.com'); // Ok
let online;
online = new OnlineLesson('coding', 'oreilly.com'); // Ok
// Error
// online = new Lesson('coding');
/***********************************************************/
class PastGrades {
    constructor() {
        this.grades = [];
    }
}
class LabeledPastGrades extends PastGrades {
}
let subClass;
subClass = new LabeledPastGrades(); // Ok
subClass = new PastGrades(); // Ok
/***********************************************************/
/*******************************/
/*** Overridden Constructors ***/
/*******************************/
/***********************************************************/
class GradeAnnouncer {
    constructor(grade) {
        this.message = grade >= 65 ? 'Maybe next time...' : 'You pass!';
    }
}
class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
        super(100);
    }
}
class FailingAnnouncer extends GradeAnnouncer {
}
/***********************************************************/
class GradesTally {
    constructor() {
        this.grades = [];
    }
    addGrades(...grades) {
        this.grades.push(...grades);
        return this.grades.length;
    }
}
class ContinuedGradesTally extends GradesTally {
    constructor(previousGrades) {
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
    countGrades(grades, letter) {
        return grades.filter((grade) => grade === letter).length;
    }
}
class FailureCounter extends GradeCounter {
    countGrades(grades) {
        return super.countGrades(grades, 'F');
    }
}
class AnyFailureChecker extends GradeCounter {
}
const counter = new AnyFailureChecker();
// Error
// const count = counter.countGrades(['A', 'C', 'F']);
/***********************************************************/
/*****************************/
/*** Overridden Properties ***/
/*****************************/
/***********************************************************/
class Assignment {
}
class GradedAssignment extends Assignment {
    constructor(grade) {
        super();
        this.grade = grade;
    }
}
/***********************************************************/
class NumericGrade {
    constructor() {
        this.value = 0;
    }
}
class VagueGrade extends NumericGrade {
}
const instance = new VagueGrade();
instance.value;
