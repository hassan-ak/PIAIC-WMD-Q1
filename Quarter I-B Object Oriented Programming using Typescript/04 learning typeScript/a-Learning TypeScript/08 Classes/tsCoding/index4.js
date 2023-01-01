"use strict";
/*
    # Chapter 8. Classes
*/
/***********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name) {
        this.name = name;
    }
    study(hours) {
        for (let i = 0; i < hours; i += 1) {
            console.log('...studying...');
        }
    }
}
class ReportCard {
    constructor(grades) {
        this.grades = grades;
    }
    report() {
        return this.grades.join(', ');
    }
}
