//***********************
//*** Chapter 41 - 42 ***
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
//*** Chapter 41 ***
//******************
chapterStart(41);
var i = 0;
while (i <= 3) {
  console.log(i);
  i++;
}
chapterEnd();

//******************
//*** Chapter 42 ***
//******************
chapterStart(42);
var i = 0;
do {
  console.log(i);
  i++;
} while (i <= 3);
console.log('---');
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 0);
chapterEnd();
