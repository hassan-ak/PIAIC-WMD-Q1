// Class 08

/*
  15+ Array Methods in Javascript
*/

let aArray = ['ali', 'umt', 'piaic', 'lahore', 'umt', 'wmd', 'umt', 'Pakistan'];
/***********************************************************************/
console.log('');
/* for each */
for (let i = 0; i < aArray.length; i++) {
  console.log(`For loop : ${aArray[i]}`);
}
console.log('');
aArray.forEach((elem) => console.log(`For each : ${elem}`));

/***********************************************************************/
console.log('');
/* map */
let newArray = aArray.map((elem) => elem.toUpperCase());
console.log(`map : ${newArray}`);

/***********************************************************************/
console.log('');
/* concat */
let concatedArray = aArray.concat(newArray);
console.log(`concat : ${concatedArray}`);

/***********************************************************************/
console.log('');
/* push */
console.log(`before push : ${aArray}`);
aArray.push('Hello');
console.log(`after push : ${aArray}`);

/***********************************************************************/
console.log('');
/* pop */
console.log(`before pop : ${aArray}`);
aArray.pop();
console.log(`after pop : ${aArray}`);

/***********************************************************************/
console.log('');
/* splice */
console.log(`before splice : ${aArray}`);
aArray.splice(2, 3, 'New element');
console.log(`after splice : ${aArray}`);

/***********************************************************************/
console.log('');
/* slice */
console.log(`before slice : ${aArray}`);
let slice = aArray.slice(2, 4, 'New element');
console.log(`sliced part : ${slice}`);

/***********************************************************************/
console.log('');
/* unshift */
console.log(`before unshift : ${aArray}`);
aArray.unshift('Gojra');
console.log(`after unshift : ${aArray}`);

/***********************************************************************/
console.log('');
/* shift */
console.log(`before shift : ${aArray}`);
aArray.shift('Gojra');
console.log(`after shift : ${aArray}`);

/***********************************************************************/
console.log('');
/* join */
console.log(`aArray : ${aArray}`);
console.log(`joined : ${aArray.join('')}`);
console.log(`joined : ${aArray.join('-')}`);
console.log(`joined : ${aArray.join('...')}`);

/***********************************************************************/
console.log('');
/* every */
console.log(`Every : ${aArray.every((elem) => typeof elem === 'string')}`);

/***********************************************************************/
console.log('');
/* filter */
console.log(`aArray : ${aArray}`);
const result = aArray.filter((word) => word.length > 6);
console.log(`filter : ${result}`);

/***********************************************************************/
console.log('');
/* indexof */
console.log(`aArray : ${aArray}`);
console.log('index of umt : ', aArray.indexOf('umt'));

/***********************************************************************/
console.log('');
/* lastIndexOf */
console.log(`aArray : ${aArray}`);
console.log('last index of umt : ', aArray.lastIndexOf('umt'));

/***********************************************************************/
console.log('');
/* reduce */
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 1011;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);

/***********************************************************************/
console.log('');
/* reverse */
console.log(`aArray : ${aArray}`);
aArray.reverse();
console.log(`reverse array : ${aArray}`);
aArray.reverse();

/***********************************************************************/
console.log('');
/* sort */
console.log(`aArray : ${aArray}`);
aArray.sort();
console.log(`sorted aArray : ${aArray}`);
console.log('');
let newArray1 = [1, 6, 9, 40, 60, 8, 2, 4, 6];
console.log(`aArray : ${newArray1}`);
newArray1.sort((x, y) => x - y);
console.log(`sorted aArray : ${newArray1}`);

/***********************************************************************/
console.log('');
/* toString */
let newArray2 = [1, 6, 9, 40, 60, 8, 2, 4, 6];
console.log(newArray2.toString());

/***********************************************************************/
console.log('');
/* at */
const array11 = [5, 12, 8, 130, 44];
let index = 2;
console.log(
  `Using an index of ${index} the item returned is ${array11.at(index)}`
);
// expected output: "Using an index of 2 the item returned is 8"
index = -2;
console.log(`Using an index of ${index} item returned is ${array11.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"

/***********************************************************************/
console.log('');
/* find */
const array111 = [5, 12, 8, 130, 44];
const found = array111.find((element) => element > 10);
console.log(found);
// expected output: 12

/***********************************************************************/
console.log('');
/* some */
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true

/***********************************************************************/
