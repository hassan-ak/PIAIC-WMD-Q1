/* 
    Loops and arrays
*/

// let arr = [some array];
// for (initialize variable; variable smaller than arr.length; statement) {
//     // code to be executed
// }

console.log('\n\n');
let names = ['Chantal', 'John', 'Maxime', 'Bobbi', 'Jair'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log('\n\n');
let names1 = ['Chantal', 'John', 'Maxime', 'Bobbi', 'Jair'];
for (let i = 0; i < names1.length; i++) {
  names1[i] = 'hello ' + names1[i];
}
console.log(names1);

console.log('\n\n');
let names2 = ['Chantal', 'John', 'Maxime', 'Bobbi', 'Jair'];
for (let i = 0; i < names2.length; i++) {
  if (names2[i].startsWith('J')) {
    delete names2[i];
    continue;
  }
  names2[i] = 'hello ' + names2[i];
}
console.log(names2);

console.log('\n\n');

// let names = ['Chantal', 'John', 'Maxime', 'Bobbi', 'Jair'];
// for (let i = 0; i < names.length; i++) {
//   names.push('...');
// }
