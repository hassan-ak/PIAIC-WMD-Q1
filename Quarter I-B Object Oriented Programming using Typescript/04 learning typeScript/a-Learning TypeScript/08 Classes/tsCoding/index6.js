"use strict";
/*
    # Chapter 8. Classes
*/
/***********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/*-------------------------*/
/*-- Abstract Classes --*/
/*-------------------------*/
/***********************************************************/
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
// Error
// class Absence extends School {}
let school;
school = new Preschool('Sunnyside Daycare'); // Ok
