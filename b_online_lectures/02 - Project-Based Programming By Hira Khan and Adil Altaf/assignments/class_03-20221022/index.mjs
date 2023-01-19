// Rock paper Scissors game
import randomInteger from 'random-int';
import promptSync from 'prompt-sync';

// The available choices
let choices = ['rock', 'paper', 'scissors'];

// Messages to be shown to the user
let userPrompt = '0 for rock, 1 for paper, 2 for scissors : ';
let outcome = 'ready to play';

// computer random choices
let computerChoice = randomInteger(0, 2);
computerChoice = choices[computerChoice];

// Promt user for input
const prompt = promptSync();
let userInput = prompt(userPrompt);
let userChoice = choices[userInput];

if (computerChoice === userChoice) {
  outcome = 'Draw';
} else if (computerChoice === 'rock') {
  outcome = userChoice === 'paper' ? 'Player Wins' : 'Computer Wins';
} else if (computerChoice === 'paper') {
  outcome = userChoice === 'scissors' ? 'Player Wins' : 'Computer Wins';
} else {
  outcome = userChoice === 'rock' ? 'Player Wins' : 'Computer Wins';
}
console.log('Computer chosses : ' + computerChoice);
console.log('Player chosses : ' + userChoice);
console.log(outcome);
