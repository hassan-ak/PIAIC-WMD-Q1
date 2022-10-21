"use strict";
/*
  Chapter 6. Arrays
  Tuples
*/
let yearAndWarrior;
yearAndWarrior = [530, 'Tomyris']; // Ok
// yearAndWarrior = [false, "Tomyris"];
// ~~~~~
// Error: Type 'boolean' is not assignable to type 'number'.
// yearAndWarrior = [530];
// Error: Type '[number]' is not assignable to type '[number, string]'.
// Source has 1 element(s) but target requires 2.
// year type: number
// warrior type: string
let [year, warrior] = Math.random() > 0.5 ? [340, 'Archidamia'] : [1828, 'Rani of Jhansi'];
