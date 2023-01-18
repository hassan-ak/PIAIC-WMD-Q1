"use strict";
/*
    # Chapter 8. Classes
*/
/***********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/*----------------------*/
/*-- Classes as Types --*/
/*----------------------*/
/***********************************************************/
class Teacher {
    sayHello() {
        console.log('Take chances, make mistakes, get messy!');
    }
}
let teacher;
teacher = new Teacher(); // Ok
// Error
// teacher = 'Wahoo!';
/***********************************************************/
class SchoolBus {
    getAbilities() {
        return ['magic', 'shapeshifting'];
    }
}
function withSchoolBus(bus) {
    console.log(bus.getAbilities());
}
withSchoolBus(new SchoolBus()); // Ok
// Ok
withSchoolBus({
    getAbilities: () => ['transmogrification'],
});
