// step09e_function_rest_parameter

/*******************************************************/
function buildName(firstName: string, ...restOfName: string[]) {
  //Named function with Rest parameters
  return firstName + ' ' + restOfName.join(' ');
}
var employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie');

/*******************************************************/
//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restOfName: string[]
) {
  return firstName + ' ' + restOfName.join(' ');
};
//Note: Rest, optional and default parameters can only be at the end of the parameter list

/*******************************************************/
function sum(x: { a: number; b: number; c: number }) {
  console.log(x.a + x.b + x.c);
}
sum({ a: 10, b: 3, c: 9 });

/*******************************************************/
function sum1({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

/*******************************************************/
// Same as prior example
type ABC = { a: number; b: number; c: number };
function sum2({ a, b, c }: ABC) {
  console.log(a + b + c);
}

/*******************************************************/
function getAverage(...args: number[]) {
  var avg =
    args.reduce(function (a, b) {
      return a + b;
    }, 0) / args.length;

  return avg;
}
// Function call
console.log(
  'Average of the given numbers is : ' + getAverage(10, 20, 30, 40, 50)
);
console.log(
  'Average of the given numbers is : ' + getAverage(1.5, 3.5, 5.5, 7.5, 9.5)
);
console.log('Average of the given numbers is : ' + getAverage(2, 4, 6));

/*******************************************************/
function Job(Job_title: string, ...people: string[]) {
  return people.join(', ') + ' are ' + Job_title;
}
console.log(Job('mathematicians', 'rachel', 'john', 'peter'));
console.log(Job('coders', 'sarah', 'joseph'));

/*******************************************************/
// Error
// // function Job1(...people: string[], Job_title: string) {
// //   return people.join(', ') + ' are ' + Job_title;
// // }
// // console.log(Job('rachel', 'john', 'peter', 'Mathematicians'));
// // console.log(Job('sarah', 'joseph', 'coders'));

/*******************************************************/
