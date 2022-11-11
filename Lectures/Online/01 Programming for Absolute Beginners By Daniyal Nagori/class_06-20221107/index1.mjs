// Class 06

/*
  Date
*/
const d = new Date(); // Mon Oct 31 2022 19:37:34 GMT+0500 (Pakistan Standard Time)
const date1 = new Date('2000', 11, 2); // Sat Dec 02 2000 00:00:00 GMT+0500 (Pakistan Standard Time)
console.log(d);
console.log(date1);
let currentMonth = d.getMonth();
console.log(currentMonth);
let dayOfMonth = d.getDate();
console.log(dayOfMonth);
let currYr = d.getFullYear();
console.log(currYr);
let currentHrs = d.getHours();
console.log(currentHrs);
let currMins = d.getMinutes();
console.log(currMins);
let currSecs = d.getSeconds();
console.log(currSecs);
let currMills = d.getMilliseconds();
console.log(currMills);
let millsSince = d.getTime(); // getTime gives you the number of milliseconds that have elapsed since midnight, Jan. 1, 1970.
console.log(millsSince);
const d1 = new Date('October 13, 2014 11:13:00'); // Mon Oct 13 2014 11:13:00 GMT+0500 (Pakistan Standard Time)
const d2 = new Date('2022-03-25'); // Fri Mar 25 2022 05:00:00 GMT+0500 (Pakistan Standard Time)
const d3 = new Date(2018, 11, 24, 10, 33, 30, 0); // Mon Dec 24 2018 10:33:30 GMT+0500 (Pakistan Standard Time)
console.log(d1);
console.log(d2);
console.log(d3);
