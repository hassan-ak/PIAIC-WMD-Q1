/* 
    break and continue
*/

console.log('\n\n');
let cars = [
  {
    model: 'Golf',
    make: 'Volkswagen',
    year: 1999,
    color: 'black',
  },
  {
    model: 'Picanto',
    make: 'Kia',
    year: 2020,
    color: 'red',
  },
  {
    model: 'Peugeot',
    make: '208',
    year: 2021,
    color: 'black',
  },
  {
    model: 'Fiat',
    make: 'Punto',
    year: 2020,
    color: 'black',
  },
];
console.log(cars);

/* 
    break
*/
console.log('\n\n');
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 4) {
    break;
  }
}

console.log('\n\n');
for (let i = 0; i < cars.length; i++) {
  if (cars[i].year >= 2020) {
    if (cars[i].color === 'black') {
      console.log('I have found my new car:', cars[i]);
      break;
    }
  }
}

console.log('\n\n');
var superLongArray = [
  1, 23, 6, 6, 8, 45, 9, 21, 66, 456, 6, 645, 6, 464, 65, 65, 42, 4654, 655,
  152, 165, 4165, 465, 465, 465, 465, 465, 456, 465, 465, 654, 564, 564, 65,
];
while (true) {
  if (superLongArray[0] != 42 && superLongArray.length > 0) {
    superLongArray.shift();
  } else {
    console.log('Found 42!');
    break;
  }
}

console.log('\n\n');
var notFound = true;
while (superLongArray.length > 0 && notFound) {
  if (superLongArray[0] != 42) {
    superLongArray.shift();
  } else {
    console.log('Found 42!');
    notFound = false;
  }
}

/*
  continue
*/
console.log('\n\n');
for (let car of cars) {
  if (car.color !== 'black') {
    continue;
  }
  if (car.year >= 2020) {
    console.log('we could get this one:', car);
  }
}
console.log('\n\n');
// let i = 1;
// while (i < 50) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

console.log('\n\n');
let i = 1;
while (i < 10) {
  i++;
  if ((i - 1) % 2 === 0) {
    continue;
  }
  console.log(i - 1);
}

console.log('\n\n');
for (let i = 1; i < 10; i = i + 2) {
  console.log(i);
}

console.log('\n\n');
