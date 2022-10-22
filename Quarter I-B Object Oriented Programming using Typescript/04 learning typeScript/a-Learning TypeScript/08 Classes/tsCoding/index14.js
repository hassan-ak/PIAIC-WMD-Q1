"use strict";
/*
    Chapter 8. Classes
    Extending a Class
*/
//  Overridden Constructors
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
        // this.grades = [...previousGrades];
        // Error: 'super' must be called before accessing
        // 'this' in the constructor of a subclass.
        super();
        console.log('Starting with length', this.grades.length); // Ok
    }
}
