import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';

console.clear();

/************************************************/
/************************************************/
/************************************************/
/************************************************/

let variable: string = 'Hello World !';
// variable = 15; // Assignability error
// variable.toFixed(2); // Type error

let variableUnion: string | number | boolean = 'Hello World !';
variableUnion = 25;
// type narrowing
// Type guard
// Type Check
// Literal types

// /************************************************/
// /************************************************/
// /************************************************/
// /************************************************/
let student = {
  name: 'Hassan',
  class: 'WMD',
  id: 21,
};
console.log(typeof student);

//
let student1: {
  name: string;
  class: string;
  id: number;
  section: 'c1' | 'c2';
};
student1 = {
  name: 'Hassan',
  class: 'WMD',
  id: 21,
  section: 'c2',
};

//
type student2 = {
  name: string;
  class: string;
  id: number;
};
let student2: student2 = {
  name: 'Hassan',
  class: 'WMD',
  id: 21,
};

/************************************************/
/************************************************/
/************************************************/
/************************************************/
let anim = chalkAnimation.pulse('Test App');

setTimeout(async () => {
  anim.stop();
  let result = await inquirer.prompt([
    {
      name: 'age',
      message: 'Whats your age ? ',
      type: 'number',
    },
  ]);

  console.log(`${chalk.bgBlue('Age')} : ${result.age}`);
}, 2000);

/************************************************/
/************************************************/
/************************************************/
/************************************************/
console.clear();

//console.log(" Welcome to My Calculator")

function welcomeMesg(mesg: string): void {
  console.log(mesg);
}
welcomeMesg('welcome to my calculator');
let choise = false;
async function calculator() {
  let userInput = await inquirer.prompt([
    {
      message: 'please enter the Number 1',
      type: 'input',
      name: 'num1',
      default: 0,
      validate: function (params) {
        if (isNaN(params)) {
          return 'Enter a Valid Number';
        } else {
          return true;
        }
      },
    },
    {
      message: 'please select the operation ',
      type: 'list',
      name: 'choices',
      choices: ['+', '-', '*', '/', '%'],
    },
    {
      message: 'please enter the Number 2',
      type: 'input',
      name: 'num2',
      default: 0,
      validate: function (params) {
        if (isNaN(params)) {
          return 'Enter a Valid Number';
        } else {
          return true;
        }
      },
    },
  ]);
  let result: number | string;
  let num1 = Number(userInput.num1);
  let num2 = Number(userInput.num2);

  switch (userInput.choices) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = ' No Answer';
      break;
  }

  if (userInput.choices === '+') {
    result = userInput.num1 + userInput.num2;
  } else if (userInput.choices === '-') {
    result = userInput.num1 - userInput.num2;
  } else if (userInput.choices === '*') {
    result = userInput.num1 * userInput.num2;
  } else if (userInput.choices === '/') {
    result = userInput.num1 / userInput.num2;
  } else {
    result = ' No Answer';
  }

  console.log(` \n Result =  ${num1} ${userInput.choices} ${num2} = `, result);
  console.log('------------------------------');

  let c = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'Do you wan to do an-other operations ?',
    },
  ]);
  choise = c['Do you wan to do an-other operations ?'];
}
do {
  await calculator();
} while (choise);
/************************************************/
/************************************************/
/************************************************/
/************************************************/
