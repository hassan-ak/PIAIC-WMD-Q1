var arr1 = new Array('purple', 'green', 'yellow');
console.log(arr1);
var arr2 = ['black', 'orange', 'pink'];
console.log(arr2);
var arr3 = new Array(10);
console.log(arr3);
var arr4 = [10];
console.log(arr4);
console.log('');

var arr = ['hi there', 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
console.log('');

const arr101 = ['hi there'];
arr101[0] = 'new value';
console.log(arr101[0]);
// arr101 = ['nope, now you are overwriting the array']; assignment error
console.log('');

var cars = ['Toyota', 'Renault', 'Volkswagen'];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[-1]);
console.log('');
cars[0] = 'Tesla';
console.log(cars[0]);
console.log(cars);
cars[3] = 'Kia';
cars[-1] = 'Fiat';
console.log(cars);
console.log('');

var colors = ['black', 'orange', 'pink'];
var booleans = [true, false, false, true];
var emptyArray = [];
console.log('Length of colors:', colors.length);
console.log('Length of booleans:', booleans.length);
console.log('Length of empty array:', emptyArray.length);
console.log('');

var numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log('numbers', numbers);
