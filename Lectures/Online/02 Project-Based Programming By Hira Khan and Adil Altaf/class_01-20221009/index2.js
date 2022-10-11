/*
    Miles-to-kilometers converter
        - Create a variable that contains a value in miles,
        convert it to kilometers, and log the value in 
        kilometers in the following format: 
            - The distance of 130 kms is equal to 209.2142 miles
        - For reference, 1 mile equals 1.60934 kilometers.
*/

// Ask user for distance in miles
// store in a variable
// after converting to a number
let distanceMiles = Number(prompt('Please enter the distance in miles.', 130));
console.log('Distance in Miles : ', distanceMiles, 'miles');

// define conversion factor
const milesTokm = 1.60934;
console.log('One mile : ', milesTokm, 'km');

let distanceKm = distanceMiles * milesTokm;

console.log(
  'The distance of ' +
    distanceMiles +
    ' miles is equal to ' +
    distanceKm +
    ' km'
);
