/*
    # Chapter 8. Classes
*/
/***********************************************************/

/*-------------------------*/
/*-- Abstract Classes --*/
/*-------------------------*/

/***********************************************************/
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
// Error
// class Absence extends School {}

let school: School;
school = new Preschool('Sunnyside Daycare'); // Ok
// Error
// school = new School('somewhere else');

/***********************************************************/

export {};
