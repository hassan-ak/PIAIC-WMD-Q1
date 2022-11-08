/*
    Functions
*/

/* Arrow Function*/
function add(x, y) {
  return x + y;
}
add(1, 2);
//
let add2 = (x, y) => x + y;
add2(1, 2);
//
const student = {
  firstName: 'Adil',
  lastName: 'Altaf',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(student.fullName());

/*Recursive function*/
function getRecursive(nr) {
  console.log('Started function iteration: ', nr);
  if (nr > 0) {
    getRecursive(--nr);
  } else {
    console.log('Recursion completed');
  }
  console.log('Function ended: ', nr);
}
getRecursive(5);

//
function factorial(nr) {
  console.log(nr);
  if (nr === 0) {
    return 1;
  } else {
    return nr * factorial(--nr);
  }
}
console.log(factorial(7));

//
const one = () => console.log('one');
const two = () => console.log('two');
const three = () => {
  console.log('three');
  one();
  two();
};
const four = () => {
  console.log('four');
  setTimeout(one, 0);
  three();
};

four();
