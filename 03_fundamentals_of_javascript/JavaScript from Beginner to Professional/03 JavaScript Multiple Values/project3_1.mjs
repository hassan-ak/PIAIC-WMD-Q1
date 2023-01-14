/*
    Manipulating an array
        Take the following array: 
            const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
        Manipulate your array using various methods, such as pop(), push(), shift(), and unshift(), 
        and transform it into the following:
            ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
        You can take the following steps, or adopt your own approach:
            • Remove the first item and the last item.
            • Add FIRST to the start of the array.
            • Assign hello World to the fourth item value.
            • Assign MIDDLE to the third index value.
            • Add LAST to the last position in the array.
            • Output it to the console.
*/
const theList = [
  'Laurence',
  'Svekis',
  true,
  35,
  null,
  undefined,
  { test: 'one', score: 55 },
  ['one', 'two'],
];
console.log('The List :', theList);
theList.shift();
theList.pop();
console.log('The List :', theList);
theList.unshift('FIRST');
console.log('The List :', theList);
theList[3] = 'hello World';
console.log('The List :', theList);
theList[2] = 'MIDDLE';
console.log('The List :', theList);
theList.splice(theList.length - 3, 3, 'LAST');
console.log('The List :', theList);
