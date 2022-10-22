/*
    Chapter 8. Classes
    Extending a Class
*/

class Teacher1 {
  teach() {
    console.log('The surest test of discipline is its absence.');
  }
}
class StudentTeacher1 extends Teacher1 {
  learn() {
    console.log('I cannot afford the luxury of a closed mind.');
  }
}
const teacher1 = new StudentTeacher1();
teacher1.teach(); // Ok (defined on base)
teacher1.learn(); // Ok (defined on subclass)
// teacher1.other();
// ~~~~~
// Error: Property 'other' does not exist on type 'StudentTeacher'.
