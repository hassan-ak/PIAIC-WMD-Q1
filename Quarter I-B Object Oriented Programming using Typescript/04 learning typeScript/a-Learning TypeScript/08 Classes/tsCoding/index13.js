"use strict";
/*
    Chapter 8. Classes
    Extending a Class
*/
//  Extension Assignability
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
// online = new Lesson('coding');
// Error: Property 'url' is missing in type
// 'Lesson' but required in type 'OnlineLesson'.
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
