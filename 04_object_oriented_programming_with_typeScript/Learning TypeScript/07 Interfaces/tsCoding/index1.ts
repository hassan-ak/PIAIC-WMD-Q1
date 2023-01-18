/*
    # Chapter 7. Interfaces
*/
/***********************************************************/

/*------------------------------------*/
/*-- Type Aliases Versus Interfaces --*/
/*------------------------------------*/

/***********************************************************/
type Poet = {
  born: number;
  name: string;
};
interface Poet1 {
  born: number;
  name: string;
}
let valueLater: Poet;
valueLater = {
  born: 1935,
  name: 'Sara Teasdale',
};
// Error
// valueLater = 'Emily Dickinson';
// Error
// valueLater = {
//   born: true,
//   name: 'Sappho',
// };

/***********************************************************/
export {};
