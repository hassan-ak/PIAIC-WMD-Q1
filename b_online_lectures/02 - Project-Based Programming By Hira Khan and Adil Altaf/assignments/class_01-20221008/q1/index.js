/*
    - Miles-to-kilometers converter (vice versa)
        - Create a variable that contains a value in miles, 
        convert it to kilometers, and log the value in kilometers 
        in the following format:
            - The distance of 130 kms is equal to 209.2142 miles
        - For reference, 1 mile equals 1.60934 kilometers.
        - Code for both the cases
*/

// Define a variable to ask user for conversion type
var conversionType;
var refFrom;
var refTo;
var valueToConvert;
var convertedVlue;

// conversion reference
const conversionValue = 1.60934;

// Check for what convrsion to be done
while (true) {
  if (conversionType == 1) {
    console.log('Selected Conversion : Miles to Kilometer');
    console.log('1 mile = ', conversionValue, ' km');
    refFrom = 'miles';
    refTo = 'kilometers';
    break;
  } else if (conversionType == 2) {
    console.log('Selected Conversion : Kilometer to Miles');
    console.log('1 km = ', 1 / conversionValue, ' miles');
    refFrom = 'kilometers';
    refTo = 'miles';
    break;
  } else {
    conversionType = prompt(
      'Select conversion from the following menu : \n 1 : Miles to Kilometer \n 2 : Kilometer to Miles'
    );
  }
}

while (true) {
  if (!isNaN(valueToConvert)) {
    if (conversionType == 1) {
      convertedVlue = valueToConvert * conversionValue;
    } else {
      convertedVlue = valueToConvert / conversionValue;
    }
    break;
  } else {
    valueToConvert = Number(prompt(`Enter ${refFrom} to convert : `));
  }
}

console.log(`${refFrom} to convert : `, valueToConvert);

// Result
console.log(
  `The distance of ${valueToConvert} ${refFrom} is equal to ${convertedVlue} ${refTo}.`
);
