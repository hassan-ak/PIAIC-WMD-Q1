/* 
    Loops and objects
    for in loop
*/

console.log('\n\n');
let car = {
  model: 'Golf',
  make: 'Volkswagen',
  year: 1999,
  color: 'black',
};
for (let prop in car) {
  console.log(prop, ' : ', car[prop]);
}

console.log('\n\n');
