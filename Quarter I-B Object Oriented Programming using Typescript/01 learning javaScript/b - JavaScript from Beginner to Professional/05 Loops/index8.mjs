/* 
    Looping over objects by converting to an array
*/

console.log('\n\n');
let car = {
  model: 'Golf',
  make: 'Volkswagen',
  year: 1999,
  color: 'black',
};
let arrKeys = Object.keys(car);
console.log(arrKeys);
console.log('\n\n');

for (let key of Object.keys(car)) {
  console.log(key);
}
console.log('\n\n');
for (let val of Object.values(car)) {
  console.log(val);
}
console.log('\n\n');
let arrKeys1 = Object.keys(car);
for (let i = 0; i < arrKeys1.length; i++) {
  console.log(arrKeys1[i] + ': ' + car[arrKeys1[i]]);
}
console.log('\n\n');
let arrEntries = Object.entries(car);
console.log(arrEntries);

console.log('\n\n');
for (const [key, value] of Object.entries(car)) {
  console.log(key, ':', value);
}
console.log('\n\n');
