/*
    Break Fask example using async / Await
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

const startMakingBreakfastPromise = function () {
  return new Promise((resolve) => {
    resolve('\n==>Program Started');
  });
};
const startMakingOmelettePromise = function () {
  console.log('\t==>Start Making Breakfast');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('\t\t==>Omelette is ready');
    }, 5000);
  });
};
const startMakingParathaPromise = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('\t==>Start Making Paratha');
    }, 2000);
  });
};
const parathaReadyPromise = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('\t\t==>Paratha is ready');
    }, 3000);
  });
};
const startMakingCoffeePromise = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('\t==>Start Making Coffee');
    }, 4000);
  });
};
const coffeeReadyPromise = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('\t\t==>Coffee is ready');
    }, 1000);
  });
};
const askforLunchPromise = function () {
  console.log('\t==>What you need for lunch ? ');
  return new Promise((resolve) => {
    setTimeout(() => {
      prompt('\t\t==>Spouce Response : ');
      resolve('\t==>Where you want to go for dinner ? ');
    }, 10000);
  });
};
const askforDinnerPromise = function () {
  return new Promise((resolve) => {
    prompt('\t\t==>Spouce Resopnse : ');
    resolve('==>Program Ended\n');
    resolve('\t==>Where you want to go for dinner ? ');
  });
};
async function runProgram() {
  try {
    const r1 = await startMakingBreakfastPromise();
    console.log(r1);
    const r2 = await startMakingOmelettePromise();
    console.log(r2);
    const r3 = await startMakingParathaPromise();
    console.log(r3);
    const r4 = await parathaReadyPromise();
    console.log(r4);
    const r5 = await startMakingCoffeePromise();
    console.log(r5);
    const r6 = await coffeeReadyPromise();
    console.log(r6);
    const r7 = await askforLunchPromise();
    console.log(r7);
    const r8 = await askforDinnerPromise();
    console.log(r8);
  } catch (error) {
    console.log(error);
  }
}
runProgram();
