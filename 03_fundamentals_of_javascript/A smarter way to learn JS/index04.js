//***********************
//*** Chapter 18 - 20 ***
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
//*** Chapter 18 ***
//******************
chapterStart(18);
var cleanestCities = [
  'Cheyenne',
  'Santa Fe',
  'Tucson',
  'Great Falls',
  'Honolulu',
];
var cityToCheck = 'Honolulu';
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    console.log("It's one of the cleanest cities");
  }
}
chapterEnd();

//******************
//*** Chapter 19 ***
//******************
chapterStart(19);
var cleanestCities = [
  'Cheyenne',
  'Santa Fe',
  'Tucson',
  'Great Falls',
  'Honolulu',
];
var numElements = cleanestCities.length;
var cityToCheck = 'Tucson';
var matchFound = false;
for (var i = 0; i < numElements; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    console.log("It's one of the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  console.log("It's not on the list");
}
chapterEnd();

//******************
//*** Chapter 20 ***
//******************
chapterStart(20);
var firstNames = ['BlueRay ', 'Upchuck ', 'Lojack ', 'Gizmo ', 'Do-Rag '];
var lastNames = ['Zzz', 'Burp', 'Dogbone', 'Droop'];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}
console.log(fullNames);
chapterEnd();
