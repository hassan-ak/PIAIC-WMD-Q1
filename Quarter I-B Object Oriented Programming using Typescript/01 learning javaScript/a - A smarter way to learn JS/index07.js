//***********************
//*** Chapter 31 - 34 ***
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
//*** Chapter 31 ***
//******************
chapterStart(31);
var rigtNow = new Date();
console.log(rigtNow);
console.log('---');
var dateString = rigtNow.toString();
console.log(dateString);
console.log('---');
var rightNow = new Date();
var theDay = rightNow.getDay();
var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);
chapterEnd();

//******************
//*** Chapter 32 ***
//******************
chapterStart(32);
var d = new Date();
console.log('Date object : ', d);
var dateString = d.toString();
console.log('Date string : ', dateString);
var theDay = d.getDay();
console.log('Day : ', theDay);
var currentMonth = d.getMonth();
console.log('Month : ', currentMonth);
var currentDate = d.getDate();
console.log('Date : ', currentDate);
var currentYear = d.getFullYear();
console.log('Year : ', currentYear);
var currentHour = d.getHours();
console.log('Hour : ', currentHour);
var currentMinutes = d.getMinutes();
console.log('Minutes : ', currentMinutes);
var currentSeconds = d.getSeconds();
console.log('Seconds : ', currentSeconds);
var currentMilliSeconds = d.getMilliseconds();
console.log('Milli Seconds : ', currentMilliSeconds);
var tillTime = d.getTime();
console.log('Till Now : ', tillTime);

chapterEnd();

//******************
//*** Chapter 33 ***
//******************
chapterStart(33);
var today = new Date();
var doomsday = new Date('June 30, 2035');
var msToday = today.getTime();
var msDoomsday = doomsday.getTime();
var msDiff = msDoomsday - msToday;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
console.log('Days : ', dDiff);
chapterEnd();

//******************
//*** Chapter 34 ***
//******************
chapterStart(34);
var d = new Date();
var dS = d.toString();
console.log('Date Original  : ', dS);
d.setFullYear(2001);
dS = d.toString();
console.log('Date Set Year  : ', dS);
d.setMonth(1);
dS = d.toString();
console.log('Date Set Month : ', dS);
d.setDate(10);
dS = d.toString();
console.log('Date Set Date  : ', dS);
d.setHours(3);
dS = d.toString();
console.log('Date Set Hour  : ', dS);
d.setMinutes(11);
dS = d.toString();
console.log('Date Set Minu  : ', dS);
d.setSeconds(11);
dS = d.toString();
console.log('Date Set Sec   : ', dS);
d.setMilliseconds(1100000);
dS = d.toString();
console.log('Date Set Mil   : ', dS);

chapterEnd();
