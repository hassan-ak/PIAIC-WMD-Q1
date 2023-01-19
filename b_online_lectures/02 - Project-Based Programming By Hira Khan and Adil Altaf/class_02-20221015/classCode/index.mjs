// Class 02
import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log('');

// Arrays
const array1 = [1, 'Ali', true];
console.log(array1);

const array2 = [
  'Sun',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
console.log(array2);
console.log(array2[1]);
console.log(array2[2]);
// Update a value by index
array2[0] = 'Sunday';
console.log(array2);
// length of array
console.log(array2.length);
// Adding elemnts
const array3 = [];
console.log(array3);
array3.push('Sunday');
console.log(array3);
array3.push('Tuesday');
console.log(array3);
// Add to an index
array3.splice(1, 0, 'Monday');
console.log(array3);
const array4 = [1, 'Wednesday', 5, 6, 7, 'Thursday', 1000];
// Addingh two arrays
console.log(array4);
console.log(array3 + array4);
console.log(array3.concat(array4));
// Remove last element
array4.pop();
console.log(array4);
// Remove 1st element
array4.shift();
console.log(array4);
// Remove from an index
array4.splice(1, 3);
console.log(array4);
// Find a value
console.log(array2);
console.log(array2.find((e) => e === 'Friday'));
// Sorting numbers
let nums = [0, 15, 2, 8, 87, 25, 6, 7, 5];
console.log(nums);
nums.sort((a, b) => a - b);
console.log(nums);
nums.reverse();
console.log(nums);
// Sorting strings
array2.reverse();
console.log(array2);
array2.sort();
console.log(array2);

// Mutlidimensional arrays
const tArray1 = [1, 2, 3];
const tArray2 = [4, tArray1, 5];
const tArray3 = [tArray1, tArray2, tArray1];
console.log(tArray3);
console.log(tArray3[1][1][1]);

// Objects
const student = {
  fName: 'Hassan',
  rollNumber: 'PIAIC58000',
  age: 30,
  courses: ['AI', 'CNC', 'WMD'],
  address: {
    city: 'Lahore',
    country: 'Pakistan',
  },
};
console.log(student);
console.log(student.fName);
student.fName = 'Zubair';
console.log(student);

// Conditional statmets
let isInPakistan = false;
if (isInPakistan) {
  console.log('Name : Imran');
} else {
  console.log('Name : Harry');
}
var percentage = 67;
if (percentage >= 90) {
  console.log('Grade : A+');
} else if (percentage >= 80) {
  console.log('Grade : A');
} else if (percentage >= 70) {
  console.log('Grade : B');
} else if (percentage >= 60) {
  console.log('Grade : C');
} else {
  console.log('Grade : F');
}

// Terninary operators
var percentage = 67;
let grade = percentage >= 50 ? 'Passed' : 'Failed';
console.log('Grade : ', grade);

let location = prompt('Where are you?');
switch (location) {
  case 'pakistan':
    console.log('Pakistani');
    break;
  case 'england':
    console.log('British');
    break;
  default:
    console.log('Un-Known');
    break;
}

console.log('');
