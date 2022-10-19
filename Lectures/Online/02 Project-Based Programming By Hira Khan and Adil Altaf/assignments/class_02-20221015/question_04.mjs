/*
    Friend checker game
        Ask the user to enter a name, 
        using the switch statement to return a confirmation that the 
        user is a friend if the name selected is known in the case statements. 
        You can add a default response that you don't know the person if it's an unknown name. 
        Output the result into the console.
*/

import prompSync from 'prompt-sync';
const prompt = prompSync();
var friendName = prompt('Enter some persons name : ');
console.log('Entered name : ', friendName);
var result;
switch (friendName) {
  case 'Ali':
  case 'Hassan':
  case 'Zubair':
  case 'Umair':
  case 'Ibtisam':
  case 'Saad':
    result = `Yes ${friendName} is friend.`;
    break;
  default:
    result = "I don't know " + person;
    break;
}
console.log(result);
