// step02 Const Let

//use const where variable values do not change
const a = 5;
const b: number = 33;
const c = 'best';

//I suggest use let instead of var everywhere,
//becuase let has blocked scope
if (true) {
  let z = 4;
  //use z
} else {
  let z = 'string';
  //use z
}
// console.log('let: ' + z); // Error: z is not defined in this scope

// //
// let    - local scope  / block scope    - muteable    -
// const  - local scope  / block scope    - un-muteable -
// var    - global scope / function scope - muteable    - re-declared
