"use strict";
/*
    Chapter 8. Classes
    Abstract Classes
*/
class School {
    constructor(name) {
        this.name = name;
    }
}
class Preschool extends School {
    getStudentTypes() {
        return ['preschooler'];
    }
}
// class Absence extends School {}
// ~~~~~~~
// Error: Nonabstract class 'Absence' does not implement
// inherited abstract member 'getStudentTypes' from class 'School'.
let school;
school = new Preschool('Sunnyside Daycare'); // Ok
// school = new School('somewhere else');
// Error: Cannot create an instance of an abstract class.
