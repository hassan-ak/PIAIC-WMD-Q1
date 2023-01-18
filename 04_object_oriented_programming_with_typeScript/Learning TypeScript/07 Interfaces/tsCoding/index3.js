"use strict";
/*
    # Chapter 7. Interfaces
*/
/***********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
// Ok
let myNovella = {
    pages: 195,
    title: 'Ethan Frome',
};
// Error
// let missingPages: Novella = {
// title: "The Awakening",
// }
let extraProperty = {
    pages: 300,
    // Error
    // strategy: "baseline",
    // style: "Naturalism"
    title: '',
};
function useGivesBoth(instance) {
    instance.giveEither(); // Type: number | string
    instance.giveNumber(); // Type: number
    instance.giveString(); // Type: string
}
