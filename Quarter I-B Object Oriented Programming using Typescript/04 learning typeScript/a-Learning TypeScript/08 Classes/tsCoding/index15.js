"use strict";
/*
    Chapter 8. Classes
    Extending a Class
*/
//  Overridden Methods
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
// Expected type: number
// Actual type: boolean
// const count = counter.countGrades(['A', 'C', 'F']);
