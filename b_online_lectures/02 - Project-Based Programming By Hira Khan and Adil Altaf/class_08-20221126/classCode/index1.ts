/************************************************/
let singer = 'Alexander';
console.log(singer);
// Error
// // singer.random();

/************************************************/
let firstName = 'Adil';
firstName.length;
// Syntax error
// // let let lastName;
let fullName = Math.random() > 0.5 ? 'ALi' : 'Hassan';

/************************************************/
let fName = 'Imran';
fName = 'Alexander';
// Assignability error
// // fName = true;

/************************************************/
// Evolving any
let teacher;
teacher = 'Imran';
teacher.toUpperCase();
console.log(teacher);
teacher = 7;
teacher.toPrecision(1);
// Error
// // teacher.toUpperCase();

/************************************************/
// Strong - Explicit typing
let country: string;
country = 'Pakistan';
let city: string = 'Islamabad';

/************************************************/
let rapper = 'Eminem';
// Error
// // rapper.push()

/************************************************/
let alexander = {
  location: 'USA',
  timeZone: 'NYC',
};
alexander.location;

/************************************************/
