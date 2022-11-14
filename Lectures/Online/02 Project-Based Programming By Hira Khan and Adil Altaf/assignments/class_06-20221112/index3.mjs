/*
    Breakfast example using functions
        - Write code that must achieve the following requirements:
            - First, start making breakfast
                - Start making an omelette immediately. This should take 5 seconds.
                - Start making a paratha after 2 seconds. It should take 3 seconds to make.
                - Start making coffee after 4 seconds. It should be ready in 1 second.
            - While you're making breakfast, ask wife or husband what she wants for lunch
                - He or she will respond after 10 seconds.
            - Then, ask him or her where to go for dinner.
                - Response should be received immediately.
*/
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
console.clear();
function startMakingBreakfast() {
  console.log('\n==>Program Started');
}
function startMakingOmelette() {
  console.log('\t==>Start Making Breakfast');
  setTimeout(() => {
    console.log('\t\t==>Omelette is ready');
  }, 5000);
}
function startMakingParatha() {
  setTimeout(() => {
    console.log('\t==>Start Making Paratha');
  }, 2000);
}
function parathaReady() {
  setTimeout(() => {
    console.log('\t\t==>Paratha is ready');
  }, 3000);
}
function startMakingCoffee() {
  setTimeout(() => {
    console.log('\t==>Start Making Coffee');
  }, 4000);
}
function coffeeReady() {
  setTimeout(() => {
    console.log('\t\t==>Coffee is ready');
  }, 1000);
}
function askforLunch() {
  console.log('\t==>What you need for lunch ? ');
  setTimeout(() => {
    prompt('\t\t==>Spouce Response : ');
  }, 10000);
}
function askforDinner() {
  console.log('\t==>Where you want to go for dinner ? ');
  prompt('\t\t==>Spouce Resopnse : ');
  console.log('==>Program Ended\n');
}

startMakingBreakfast();
startMakingOmelette();
startMakingParatha();
parathaReady();
startMakingCoffee();
coffeeReady();
askforLunch();
askforDinner();
