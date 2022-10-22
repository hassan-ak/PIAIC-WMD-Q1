"use strict";
/*
    Chapter 8. Classes
    Extending a Class
*/
//  Overridden Properties
class Assignment {
}
class GradedAssignment extends Assignment {
    constructor(grade) {
        super();
        this.grade = grade;
    }
}
class NumericGrade {
    constructor() {
        this.value = 0;
    }
}
class VagueGrade extends NumericGrade {
}
const instance1 = new VagueGrade();
// Expected type: number
// Actual type: number | string
instance1.value;
