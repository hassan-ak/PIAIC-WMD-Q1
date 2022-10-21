/*
    Chapter 7. Interfaces
    Type Aliases Versus Interfaces
*/

type Poet = {
  born: number;
  name: string;
};
interface Poet1 {
  born: number;
  name: string;
}

let valueLater: Poet1;
// Ok
valueLater = {
  born: 1935,
  name: 'Sara Teasdale',
};
// valueLater = 'Emily Dickinson';
// Error: Type 'string' is not assignable to 'Poet1'.
// valueLater = {
//   //   born: true,
//   // Error: Type 'boolean' is not assignable to type 'number'.
//   name: 'Sappho',
// };
