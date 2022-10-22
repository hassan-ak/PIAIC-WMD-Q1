/*
    Chapter 8. Classes
    Extending a Class
*/
//  Overridden Properties

class Assignment {
  grade?: number;
}
class GradedAssignment extends Assignment {
  grade: number;
  constructor(grade: number) {
    super();
    this.grade = grade;
  }
}

class NumericGrade {
  value = 0;
}
class VagueGrade extends NumericGrade {
  //   value = Math.random() > 0.5 ? 1 : '...';
  // Error: Property 'value' in type 'NumberOrString' is not
  // assignable to the same property in base type 'JustNumber'.
  // Type 'string | number' is not assignable to type 'number'.
  // Type 'string' is not assignable to type 'number'.
}
const instance1: NumericGrade = new VagueGrade();
// Expected type: number
// Actual type: number | string
instance1.value;
