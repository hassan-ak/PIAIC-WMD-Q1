/*
transpiled - compiled for a machine
interpreted - interprated at run time
compiled - TS converted to JS
*/
/* Todo's*/
/*
    1. panaverse typescript library (learn-typescript)
*/
/************************************************************************/
/************************************************************************/
/************************************************************************/
/*
    Step 00
*/
/*
    1. Install Node JS
        1. node -v
    2. npm install -g typescript
        2. tsc - v
    3. Github Desktop
    4. VS code
*/
// Type inferance
let message = 'Hello World !';
console.log(message);
// Syntax error
// lett a = "Ali"
// type error
// message.console()
// Assignability error
// message = 6;
/************************************************************************/
/************************************************************************/
/************************************************************************/
/*
    Step 03
*/
/*
    1. Create some components export as module or default
    2. Import in some file and use it
*/
// import a from "./first";
// import { b, c as d } from "./second";
// let sum = a + b + d;
// console.log(`Sum : ${sum}`);
/*
    1. update ts config to define modulas methods
    2. update package.json to define type
*/
import a from './first.js';
import { b, c as d } from './second.js';
let sum = a + b + d;
console.log(`Sum 1 : ${sum}`);
/*
    Inquirer Library
    npm i inquirer
    npm i --save-dev @types/inquirer
    cli applications
*/
import inquirer from 'inquirer';
let inputData = await inquirer.prompt([
    {
        message: 'Enter your Age : ',
        name: 'age',
        type: 'number',
    },
]);
console.log(`Age : ${inputData.age}`);
/*
    Chalk Library
    npm i chalk
*/
import chalk from 'chalk';
async function takeUserInput() {
    let inputData = await inquirer.prompt([
        {
            message: 'Enter your Age : ',
            name: 'age',
            type: 'number',
        },
        {
            message: 'Enter your Name : ',
            name: 'name',
            type: 'string',
        },
    ]);
    console.log(chalk.bgBlueBright(`Age : ${inputData.age}`));
}
takeUserInput();
// Upto step 03
