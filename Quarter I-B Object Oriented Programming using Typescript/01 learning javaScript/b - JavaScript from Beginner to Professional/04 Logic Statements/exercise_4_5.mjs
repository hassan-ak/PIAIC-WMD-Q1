/*
    Practice exercise 4.5 
        1. Create a variable called prize and use a prompt to ask the user to set the 
        value by selecting a number between 0 and 10
        2. Convert the prompt response to a number data type
        3. Create a variable to use for the output message containing the value "My Selection: "
        4. Using the switch statement (and creativity), provide a response back 
        regarding a prize that is awarded depending on what number is selected
5. Use the switch break to add combined results for prizes
6. Output the message back to the user by concatenating your prize variable 
strings and the output message string
*/
import prompSync from 'prompt-sync';
const prompt = prompSync();
var userInput = Number(prompt('Enter between 0 and 10 : '));
var message = 'My Selection: ';
var prize;
console.log(message, userInput);
switch (userInput) {
  case 1:
    prize = 'Why looking for a prize';
    break;
  case 2:
    prize = 'Won 10 dollors';
    console.log('Prize : ', prize);
  case 3:
    prize = 'Won 115 dollors';
    break;
  case 4:
  case 5:
  case 6:
    prize = '';
    prize = 'Jackpot : Won 1000 dollors';
    break;
  case 7:
    prize = 'Won 1 Dollor';
    break;
  case 8:
    prize = 'No prize won';
    break;
  case 9:
    prize = 'Retry';
    break;
  default:
    prize = 'Your selection was wrong';
    break;
}
console.log('Prize : ', prize);
