"use strict";
/*
    Chapter 7. Interfaces
    Interface Extensions
*/
//   Extending Multiple Interfaces
function useGivesBoth(instance) {
    instance.giveEither(); // Type: number | string
    instance.giveNumber(); // Type: number
    instance.giveString(); // Type: string
}
