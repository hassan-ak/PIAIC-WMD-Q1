/* -------------------------------------------------------------------------- */
/*
  async and await
    - With the async keyword, we can make a function return a Promise
    -  await keyword to wait until the Promise is done. 
    - await only works in an asynchronous function.
*/
//
/* -------------------------------------------------------------------------- */

function saySomething1(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('something --- ' + x);
    }, 2000);
  }).then((value) => {
    console.log(value);
  });
}
saySomething1(2);
saySomething1(4);
saySomething1(8);
/* -------------------------------------------------------------------------- */

function saySomething(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('something' + x);
    }, 2000);
  });
}
async function talk(x) {
  const words = await saySomething(x);
  console.log(words);
}
talk(2);
talk(4);
talk(8);

/* -------------------------------------------------------------------------- */

function saySomething2(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('something' + x);
    }, 10000);
  });
}
function talk1(x) {
  const words = saySomething2(x);
  console.log(words);
}
talk1(2);
talk1(4);
talk1(8);
