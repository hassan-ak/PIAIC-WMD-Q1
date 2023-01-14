/*
    Practice exercise 4.1
        1. Create a variable with a Boolean value.
        2. Output the value of the variable to the console.
        3. Check whether the variable is true and if so, output a message to the console, 
        using the following syntax:
        if(myVariable){
            //action
        } 
        4. Add another if statement with an ! in front of the variable to check whether 
        the condition is not true, and create a message that will be printed to the 
        console in that instance. You should have two if statements, one with an 
        ! and the other without. You could also use an if and an else statement 
        instead—experiment!
        5. Change the variable to the opposite to see how the result changes.
*/

var variable = false;
console.log(`Variable : ${variable}`);
if (variable) {
  console.log('Hello from true If block');
}
if (!variable) {
  console.log('Hello from false If block');
}
if (variable) {
  console.log('Hello from If block');
} else {
  console.log('Hello from else block');
}