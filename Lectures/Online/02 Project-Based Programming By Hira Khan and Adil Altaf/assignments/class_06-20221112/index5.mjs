/*
    Breakfast example using promises
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
startMakingBreakfastPromise()
  .then((value) => {
    console.log(value);
    return startMakingOmelettePromise();
  })
  .then((value) => {
    console.log(value);
    return startMakingParathaPromise();
  })
  .then((value) => {
    console.log(value);
    return parathaReadyPromise();
  })
  .then((value) => {
    console.log(value);
    return startMakingCoffeePromise();
  })
  .then((value) => {
    console.log(value);
    return coffeeReadyPromise();
  })
  .then((value) => {
    console.log(value);
    return askforLunchPromise();
  })
  .then((value) => {
    console.log(value);
    return askforDinnerPromise();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
