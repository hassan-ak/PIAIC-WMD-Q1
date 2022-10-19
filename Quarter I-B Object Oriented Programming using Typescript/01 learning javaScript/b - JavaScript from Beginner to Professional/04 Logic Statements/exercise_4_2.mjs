/*
    Practice exercise 4.2
        1. Create a prompt to ask the user's age
        2. Convert the response from the prompt to a number
        3. Declare a message variable that you will use to hold the console message for the user
        4. If the input age is equal to or greater than 21, set the message variable to 
        confirm entry to a venue and the ability to purchase alcohol
        5. If the input age is equal to or greater than 19, set the message variable to 
        confirm entry to the venue but deny the purchase of alcohol
        6. Provide a default else statement to set the message variable to deny entry if 
        none are true
        7. Output the response message variable to the console
*/

import prompSync from 'prompt-sync';
const prompt = prompSync();
var age = Number(prompt('Enter your age : '));
var message;
if (age >= 21) {
  message = 'Entery Confirmed, Purchase allowed';
} else if (age >= 19) {
  message = 'Entery Confirmed, Purchase denyed';
} else {
  message = 'Entery denyed, Purchase denyed';
}
console.log(message);
