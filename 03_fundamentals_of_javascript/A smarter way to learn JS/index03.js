//***********************
//*** Chapter 15 - 17 ***
//***********************

function chapterStart(params) {
  console.log('******************');
  console.log('*** Chapter ' + params + ' ***');
  console.log('******************');
}
function chapterEnd() {
  console.log(' ');
  console.log(' ');
  console.log(' ');
}

//******************
//*** Chapter 15 ***
//******************
chapterStart(15);
var cities = [
  'Atlanta',
  'Baltimore',
  'Chicago',
  'Denver',
  'Los Angeles',
  'Seattle',
];
console.log('cities : ', cities);
console.log('City 3 :' + cities[2]);
console.log('---');
var mixedArray = [1, 'Bob', 'Now is', true];
console.log('mixedArray : ', mixedArray);
chapterEnd();

//******************
//*** Chapter 16 ***
//******************
chapterStart(16);
var pets = [];
console.log('Pets : ', pets);
pets[0] = 'dog';
pets[1] = 'cat';
pets[2] = 'bird';
pets[4] = 'lizard';
console.log('Pets : ', pets);
pets[2] = 'fish';
console.log('Pets : ', pets);
pets.pop();
console.log('Pets : ', pets);
pets.push('lion');
console.log('Pets : ', pets);
chapterEnd();

//******************
//*** Chapter 17 ***
//******************
chapterStart(17);
var pets = ['dog', 'cat', 'fish', 'bird', 'lion', 'lizard'];
console.log('Pets : ', pets);
pets.shift();
console.log('Pets : ', pets);
pets.unshift('tiger', 'ferret');
console.log('Pets : ', pets);
pets.splice(2, 2, 'pig', 'duck', 'emu');
console.log('Pets : ', pets);
pets.splice(0, 3);
console.log('Pets : ', pets);
var noPets = pets.slice(0, 4);
console.log('noPets : ', noPets);
chapterEnd();
