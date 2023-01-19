#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";



let score = 0;
let play= true;

(async () => {
    await showBanner('Guessing Game', 'Guess to win',"green");
})();

async function guessingNumber(){
while(play){

let randomNumber = Math.ceil((Math.random()*2) + 1); 
let answer = await inquirer.prompt([{
        name:"userNumber",
        type:"number",
        message:"Enter eny Number From 1 to 3"
    }]);

    if(answer.userNumber === randomNumber ){
        console.log(chalk.green("You guess a right number"));
        score +=10;
        console.log(chalk.yellow(`your scores are: ${score}`));
    }
    else{
        console.log(chalk.red("try again !!"));
        play= false;
    }
    
}
}
setTimeout(()=>{
    guessingNumber()
},1000)




