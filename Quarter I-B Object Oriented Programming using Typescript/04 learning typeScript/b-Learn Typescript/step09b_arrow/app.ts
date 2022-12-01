// step09b_arrow

/*********************************************************/

var add = (a: number, b: number) => {
  return a + b;
};

/*********************************************************/
let add1 = (x: number, y: number) => x + y;
//output var add1 = function(x, y){return x + y};

/*********************************************************/
let sum = (x: number, y: number): number => {
  return x + y;
};
sum(10, 20); //returns 30

/*********************************************************/
let Print = () => console.log('Hello TypeScript');
Print(); //Output: Hello TypeScript

/*********************************************************/
let sum1 = (x: number, y: number) => x + y;
sum(3, 4); //returns 7

/*********************************************************/
