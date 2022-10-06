document.write('<h1>Assignment 03</h1>');
document.write('<hr/>');

// *****************
// ***  Task 01  ***
// *****************
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];
document.write(
  `
  <div style=" border: 1px solid blue; max-width: 500px; max-height: 300px; padding: 15px;">
    <h2>Qualifications</h2>
    <div style="padding: 1px">
      <ol>`
);
for (var i = 0; i < qualifications.length; i++) {
  document.write(`<li>${qualifications[i]}</li>`);
}
document.write(
  `</ol>
    </div>
  </div>
`
);
document.write('<hr/>');

// *****************
// ***  Task 02  ***
// *****************
var sNames = ['Michael', 'John', 'Tony'];
var sScore = [320, 230, 480];
var tMarks = 500;
document.write(
  `
  <div style=" border: 1px solid blue; max-width: 500px; max-height: 300px; padding: 15px;">
    <h2>Qualifications</h2>
    <div style="padding: 1px">
      <ul>`
);
for (var i = 0; i < sNames.length; i++) {
  document.write(
    `<li>Score of ${sNames[i]} is ${sScore[i]}. Percentage: ${
      (sScore[i] / tMarks) * 100
    }%</li>`
  );
}
document.write(
  `</ul>
    </div>
  </div>
`
);
document.write('<hr/>');

// *****************
// ***  Task 03  ***
// *****************
var colors = ['black', 'silver', 'grey'];
document.write(`Original list : ${colors}`);
document.write(`<br/>`);
var c1 = prompt('Color to be added in the beginning : ');
document.write(`Color to be added in the beginning : ${c1}`);
document.write(`<br/>`);
colors.unshift(c1);
document.write(`Updated list (step A): ${colors}`);
document.write(`<br/>`);
var c1 = prompt('Color to be added to the end : ');
document.write(`Color to be added to the end : ${c1}`);
document.write(`<br/>`);
colors.push(c1);
document.write(`Updated list (step B): ${colors}`);
document.write(`<br/>`);
var c1 = ['red', 'purple'];
document.write(`Color to be added in the beginning : ${c1}`);
document.write(`<br/>`);
colors.splice(0, 0, c1[1]);
colors.splice(0, 0, c1[0]);
document.write(`Updated list (step C): ${colors}`);
document.write(`<br/>`);
colors.shift();
document.write(`Updated list (step D - remove first element): ${colors}`);
document.write(`<br/>`);
colors.pop();
document.write(`Updated list (step E - remove last element): ${colors}`);
document.write(`<br/>`);
var in1 = prompt('Index to add Color : ');
var c1 = prompt(`Color to be added to the ${in1} index : `);
document.write(`Color to be added to the ${in1} index : ${c1}`);
document.write(`<br/>`);
colors.splice(in1, 0, c1);
document.write(`Updated list (step F): ${colors}`);
document.write(`<br/>`);
var in1 = prompt('Index to remove Color : ');
var c1 = prompt(`Number of colors to be removed : `);
colors.splice(in1, c1);
document.write(`Updated list (step G): ${colors}`);
document.write(`<hr/>`);

// *****************
// ***  Task 04  ***
// *****************
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
var sCities = cities.slice(2, 5);
document.write(
  `
  <div style=" border: 1px solid blue; max-width: 500px; max-height: 300px; padding: 15px;">
    <h5>Cities List : </h5>
    <p>${cities}</p>
    <h5>Selected cities list : </h5>
    <p>${sCities}</p>
  </div>
`
);
document.write('<hr/>');

// *****************
// ***  Task 05  ***
// *****************
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var temp = new Set(arr1);
document.write(`Sample array : [${arr1}]`);
arr1 = Array.from(temp);
document.write('<br/>');
document.write(`Sample Output : [${arr1}]`);
document.write('<hr/>');

// *****************
// ***  Task 06  ***
// *****************
var aCities = ['Karachi', 'Lahore', 'Islamabad', 'Faisalabad'];
var o = ['th', 'st', 'nd', 'rd'];
for (var i = 0; i < aCities.length - 1; i++) {
  document.write(`${i + 1}${o[i + 1]} choice is ${aCities[i]}`);
  document.write('<br/>');
}
document.write('<hr/>');

// *****************
// ***  Task 07  ***
// *****************
var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var c = b.concat(a);
var temp1 = new Set(c);
c = Array.from(temp1);
document.write('<br/>');
document.write(`Output : [${c}]`);
document.write('<hr/>');

// *****************
// ***  Task 08  ***
// *****************
var counting = new Array();
var reverseCounting = new Array();
var even = new Array();
var odd = new Array();
var series = new Array();
for (i = 1; i <= 15; i++) {
  counting.push(i);
}
for (i = 10; i > 0; i--) {
  reverseCounting.push(i);
}
for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    even.push(i);
    if (i !== 0) {
      series.push(i + 'k');
    }
  } else {
    odd.push(i);
  }
}
document.write(`Counting : ${counting} <br/>`);
document.write(`Reverse Counting : ${reverseCounting} <br/>`);
document.write(`Even : ${even} <br/>`);
document.write(`Odd : ${odd} <br/>`);
document.write(`Series : ${series}`);
document.write('<hr/>');

// *****************
// ***  Task 09  ***
// *****************
arr = [24, 53, 78, 91, 12];
var maxN = arr[0];
document.write(`Array Items : ${arr} <br/>`);
for (i = 0; i < arr.length; i++) {
  if (maxN > arr[i]) {
    continue;
  } else {
    maxN = arr[i];
  }
}
document.write(`The largest number is ${maxN} <br/>`);
document.write('<hr/>');

// *****************
// ***  Task 10  ***
// *****************
var a = [20, 53, 78, 4, 91, 12];
document.write(`Actual array : [${a}] <br/>`);
document.write(
  `Sorted array : [${a.sort(function (a, b) {
    return a - b;
  })}] <br/>`
);
document.write('<hr/>');

// *****************
// ***  Task 11  ***
// *****************
a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var searchItem = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
);
if (a.indexOf(searchItem) === -1) {
  document.write(
    `We are sorry. ${searchItem} is <b> not available</b> in our bakery`
  );
} else {
  document.write(
    `<p>${searchItem} is available at index <b>${a.indexOf(
      searchItem
    )}</b> in our bakery</p>`
  );
}
