/*
    # Chapter 6. Arrays
*/

/***********************************************************/
const elements = [true, null, undefined, '42', 42, ['42']];
elements.push('even', ['more']);

/***********************************************************/
const warriors = ['Artemisia', 'Boudica'];
// OK
warriors.push('Zenobia');
// Error
// // warriors.push(true);

export {};
