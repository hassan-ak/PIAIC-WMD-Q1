/**
 * Prepare meal (5s)
 * Make tea (2s)
 * Wash dishes (3s)
 * Watch tutorial (5s)
 * Take a nap (3s)
 */

console.clear();

console.log('Start\n');

function prepareMealPromise(mealMood) {
  const promise1 = new Promise((resolver, reject) => {
    console.log('Start preparing meal');
    setTimeout(() => {
      // console.log("Food is ready");
      if (mealMood) {
        resolver('Food is ready');
      } else {
        reject('Food is not ready');
      }
    }, 5000);
  });

  return promise1;
}

function prepareTeaPromise(mood) {
  const promise2 = new Promise((resolver, reject) => {
    console.log('Start preparing Tea');
    setTimeout(() => {
      if (mood) {
        resolver('Tea is ready');
      } else {
        reject('Tea is not ready');
      }
    }, 2000);
  });
  return promise2;
}

function washDishesPromise(mood) {
  const promise3 = new Promise((res, rej) => {
    console.log('Start washing dishes');
    setTimeout(() => {
      if (mood) {
        res('Done with dishes');
      } else {
        rej("Don't want to do dishes");
      }
    }, 3000);
  });
  return promise3;
}

function watchTutorialPromise() {
  const promise4 = new Promise((res, rej) => {
    console.log('Start watching tutorial');
    setTimeout(() => {
      res('Done with tutorial');
    }, 5000);
  });
  return promise4;
}

function takeNapPromise() {
  const promise5 = new Promise((res, rej) => {
    console.log('Start taking a nap');
    setTimeout(() => {
      res('Done with nap');
    }, 3000);
  });
  return promise5;
}

const mealMood = true;
const teaMood = true;
const washingMood = true;

async function startWorking() {
  try {
    const res1 = await prepareMealPromise(mealMood);
    console.log(res1);
    const res2 = await prepareTeaPromise(teaMood);
    console.log(res2);
    const res3 = await washDishesPromise(washingMood);
    console.log(res3);
    const res4 = await watchTutorialPromise();
    console.log(res4);
    const res5 = await takeNapPromise();
    console.log(res5);
  } catch (error) {
    console.log('error: ', error);
  }
}

startWorking();
