// Project 01
// ATM
import inquirer from 'inquirer';
import chalk from 'chalk';
console.clear();
console.log(chalk.bgBlackBright(' *** ATM Machine *** '));
let user = {
    fullName: 'Hassan Ali Khan',
    name: 'hassan',
    id: '1234',
    balance: 10000,
};
console.log('\n');
async function askForLogin() {
    const userInput = await inquirer.prompt([
        {
            name: 'userName',
            message: 'Enter your user name :',
            type: 'string',
            validate: function (input) {
                if (input === user.name) {
                    return true;
                }
                else {
                    return 'Not a valid user';
                }
            },
        },
        {
            name: 'userPass',
            message: 'Enter your password :',
            type: 'password',
            mask: true,
            validate: function (input) {
                if (input === user.id) {
                    return true;
                }
                else {
                    return 'Password is not valid';
                }
            },
        },
    ]);
    return userInput;
}
async function askForOperation() {
    const userInput = await inquirer.prompt([
        {
            name: 'operations',
            message: 'Select from the follwoing :',
            type: 'list',
            choices: ['Balance Inquiry', 'Amount Withdrawl'],
        },
    ]);
    return userInput;
}
async function askForAmount() {
    const userInput = await inquirer.prompt([
        {
            name: 'amount',
            message: 'Enter amount (multiple of 500) :',
            type: 'number',
            validate: function (input) {
                if (input % 500 === 0) {
                    return true;
                }
                else {
                    return 'Enter Valid Amount';
                }
            },
        },
    ]);
    return userInput;
}
async function atm() {
    await askForLogin();
    console.log(`\n\n\tWelcome ${user.fullName}\n\n`);
    let res = await askForOperation();
    if (res.operations === 'Balance Inquiry') {
        console.log(`Your Balance : ${user.balance}`);
    }
    else {
        let res1 = await askForAmount();
        if (user.balance < res1.amount) {
            console.log('You are running low on balance');
        }
        else {
            console.log('\nTransaction completed !');
            user.balance = user.balance - res1.amount;
            console.log(`Your remaining balace : ${user.balance}`);
        }
    }
    console.log('\n');
}
atm();
