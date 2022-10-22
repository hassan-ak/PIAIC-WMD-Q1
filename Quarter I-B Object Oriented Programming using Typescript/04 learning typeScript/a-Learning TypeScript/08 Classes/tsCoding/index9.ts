/*
    Chapter 8. Classes
    Classes as Types
*/
class Teacher {
  sayHello() {
    console.log('Take chances, make mistakes, get messy!');
  }
}
let teacher: Teacher;
teacher = new Teacher(); // Ok
// teacher = 'Wahoo!';
// Error: Type 'string' is not assignable to type 'Teacher'.

class SchoolBus {
  getAbilities() {
    return ['magic', 'shapeshifting'];
  }
}
function withSchoolBus(bus: SchoolBus) {
  console.log(bus.getAbilities());
}
withSchoolBus(new SchoolBus()); // Ok

// Ok
withSchoolBus({
  getAbilities: () => ['transmogrification'],
});
// withSchoolBus({
//   getAbilities: () => 123,
//   // ~~~
//   // Error: Type 'number' is not assignable to type 'string[]'.
// });
