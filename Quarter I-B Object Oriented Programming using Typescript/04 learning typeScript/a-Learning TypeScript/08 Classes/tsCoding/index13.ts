/*
    Chapter 8. Classes
    Extending a Class
*/
//  Extension Assignability

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
// online = new Lesson('coding');
// Error: Property 'url' is missing in type
// 'Lesson' but required in type 'OnlineLesson'.

class PastGrades {
  grades: number[] = [];
}
class LabeledPastGrades extends PastGrades {
  label?: string;
}
let subClass: LabeledPastGrades;
subClass = new LabeledPastGrades(); // Ok
subClass = new PastGrades(); // Ok
