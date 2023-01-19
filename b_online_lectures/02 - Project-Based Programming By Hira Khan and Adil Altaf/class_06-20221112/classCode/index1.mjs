/*
    Async
*/
/****************************************************************/
/* Async Await*/
const myPromise1 = new Promise((resolve, reject) => {
  resolve('I am resolved.');
});
async function myFunction1() {
  const resolvedValue = await myPromise1;
  console.log(resolvedValue);
}
myFunction1();
/****************************************************************/
/* Async Order*/
function breakfastOrder(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${item} is ready.`);
    }, 3000);
  });
}

async function Order(item) {
  const order = await breakfastOrder(item);
  console.log(order);
}

Order('Omelette');
Order('Paratha');
Order('Coffee');
/****************************************************************/
/* Async example*/
let counter = 0;

function incrementCounter(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      counter++;
      resolve(`x value ${value} counter: ${counter}`);
    }, 1000);
  });
}

async function asyncFunction(value) {
  console.log(`ready ${value} counter: ${counter}`);
  const resolvedValue = await incrementCounter(value);
  console.log(resolvedValue);
}

for (let i = 1; i < 4; i++) {
  asyncFunction(i);
}
/****************************************************************/
/* PassWord Checker*/
const notAllowedPasswords = ['password', 'Alexander', 'PIAIC'];
function checkPassword(password) {
  return notAllowedPasswords.includes(password);
}
function validatePassword(password) {
  return new Promise((resolve, reject) => {
    if (checkPassword(password)) {
      reject({
        status: false,
      });
    } else {
      resolve({
        status: true,
      });
    }
  });
}
function checker(password) {
  validatePassword(password)
    .then((value) => {
      console.log('Authorize User');
      console.log(value);
    })
    .catch((value) => {
      console.log('Reject User');
      console.log(value);
    });
}
checker('password');
