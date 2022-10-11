/*
    - BMI calculator
      - Set values for height in inches and weight in pounds, 
      then convert the values to centicentimeters and kilos, 
      outputting the results to the console:
        - 1 inch is equal to 2.54 cm
        - 2.2046 pounds is equal to 1 kilo
      - Output the results. Then, calculate and log the BMI: 
        - this is equal to weight (in kilos) divided 
        by squared height (in centimeters). 
        Output the results to the console
*/

var conversionType;
var inputHeightUnit;
var inputWeightUnit;
var inputHeight;
var inputWeight;
var finalHeight;
var finalWeight;
var bmi;

console.log('BMI = (weight in kilos)/(height in meters ** 2)');

// Check for input types
while (true) {
  if (conversionType == 1) {
    console.log('Selected inputs : height in inches and weight in pounds');
    inputHeightUnit = 'inches';
    inputWeightUnit = 'pounds';
    break;
  } else if (conversionType == 2) {
    console.log('Selected inputs : height in inches and weight in kilos');
    inputHeightUnit = 'inches';
    inputWeightUnit = 'kilos';
    break;
  } else if (conversionType == 3) {
    console.log('Selected inputs : height in centimeters and weight in pounds');
    inputHeightUnit = 'centimeters';
    inputWeightUnit = 'pounds';
    break;
  } else if (conversionType == 4) {
    console.log('Selected inputs : height in centimeters and weight in kilos');
    inputHeightUnit = 'centimeters';
    inputWeightUnit = 'kilos';
    break;
  } else {
    conversionType = prompt(
      'Select from the follwoing menu what your inputs are : \n 1 : height in inches and weight in pounds \n 2 : height in inches and weight in kilos \n 3 : height in centimeters and weight in pounds \n 4 : height in centimeters and weight in kilos'
    );
  }
}

console.log(
  'For reference : \n\t 1 inch is equal to 2.54 cm \n\t 2.2046 pounds is equal to 1 kilo'
);

while (true) {
  if (!isNaN(inputHeight) && !isNaN(inputWeight)) {
    console.log(
      `Input data : \n\t height : ${inputHeight} ${inputHeightUnit} \n\t weight : ${inputWeight} ${inputWeightUnit}`
    );
    if (conversionType == 1) {
      finalHeight = inputHeight * 2.54;
      finalWeight = inputWeight / 2.2046;
    } else if (conversionType == 2) {
      finalHeight = inputHeight * 2.54;
      finalWeight = inputWeight;
    } else if (conversionType == 3) {
      finalHeight = inputHeight;
      finalWeight = inputWeight / 2.2046;
    } else {
      finalHeight = inputHeight;
      finalWeight = inputWeight;
    }
    break;
  } else {
    inputHeight = Number(prompt(`Enter height in ${inputHeightUnit}`));
    inputWeight = Number(prompt(`Enter weight in ${inputWeightUnit}`));
  }
}

console.log(
  `Converted data : \n\t height : ${finalHeight} cm \n\t weight : ${finalWeight} kg`
);

bmi = finalWeight / (finalHeight / 100) ** 2;
console.log(`Results : \n\t BMI : ${bmi.toFixed(1)}`);
