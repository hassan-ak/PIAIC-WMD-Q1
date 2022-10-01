//***********************
//*** Chapter 39 - 40 ***
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
//*** Chapter 39 ***
//******************
chapterStart(39);
var dayOfWk;
switch (dayOfWk) {
  case 'Sat':
    console.log('Whoopee');
    break;
  case 'Sun':
    console.log('Whoopee');
    break;
  case 'Fri':
    console.log('TGIF!');
    break;
  default:
    console.log('Shoot me now!');
}
chapterEnd();

//******************
//*** Chapter 40 ***
//******************
chapterStart(40);
chapterEnd();
