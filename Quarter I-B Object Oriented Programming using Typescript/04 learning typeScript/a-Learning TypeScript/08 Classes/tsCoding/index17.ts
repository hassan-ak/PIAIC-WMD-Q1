/*
    Chapter 8. Classes
    Abstract Classes
*/

abstract class School {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getStudentTypes(): string[];
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

let school: School;
school = new Preschool('Sunnyside Daycare'); // Ok
// school = new School('somewhere else');
// Error: Cannot create an instance of an abstract class.
