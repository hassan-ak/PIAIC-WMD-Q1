/* -------------------------------------------------------------------------- */
/*
  Promises
    - Promises, we can organize the sequence of our code in a slightly easier-to maintain way.
    - A Promise is a special object that connects code that needs to produce a
    result and the code that needs to use this result in the next step
*/
//

// Promise always take a function with two callback parameters as an input
let promise = new Promise(function (resolve, reject) {
  // do something that might take a while
  // let's just set x instead for this example
  let x = 20;
  if (x > 10) {
    resolve(x); // on success
  } else {
    reject('Too low'); // on error
  }
});
promise.then(
  function (value) {
    console.log('Success:', value);
  },
  function (error) {
    console.log('Error:', error);
  }
);
/* -------------------------------------------------------------------------- */

/*
  - When resolve() is called, the Promise is presumed to be successful and whatever
  is between the arrows is returned and used as input for the then method on the
  Promise object. If reject() is called, the Promise failed and the catch() method
  on the Promise object (if present) is executed with the argument of the reject()
  function.
  - value of the Promise is whatever is sent as an argument to the  resolve function.
  It is a sort of placeholder
  - When a Promise is neither resolved nor rejected, we say that the Promise is
  pending.
  - then() is a Promise itself, so when it returns we can use the result for the
   next then() instance
*/
//
function promise22(callback) {
  callback('Success');
}
function promise22a(callback) {
  callback('We');
}
function promise22b(callback) {
  callback('can');
}
function promise22c(callback) {
  callback('chain');
}
function promise22d(callback) {
  callback('promises');
}
function promise22f(callback) {
  callback();
}
promise22(function (value) {
  setTimeout(() => {
    console.log(`P2 : ${value}`);
  }, 2000);
  promise22a(function (value) {
    setTimeout(() => {
      console.log(`P2 : ${value}`);
    }, 2000);
    promise22b(function (value) {
      setTimeout(() => {
        console.log(`P2 : ${value}`);
      }, 2000);
      promise22c(function (value) {
        setTimeout(() => {
          console.log(`P2 : ${value}`);
        }, 2000);
        promise22d(function (value) {
          setTimeout(() => {
            console.log(`P2 : ${value}`);
          }, 2000);
          promise22f(function (value) {
            setTimeout(() => {
              console.log(`P2 : ${value}`);
            }, 2000);
          });
        });
      });
    });
  });
});

const promise1 = new Promise((resolve, reject) => {
  resolve('success!');
})
  .then((value) => {
    console.log(value);
    return 'we';
  })
  .then((value) => {
    console.log(value);
    return 'can';
  })
  .then((value) => {
    console.log(value);
    return 'chain';
  })
  .then((value) => {
    console.log(value);
    return 'promises';
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
/* -------------------------------------------------------------------------- */

/*
  - If any of the functions were to result in a rejection and the Promise were
  therefore rejected, this catch() block would be executed and print whatever the
  reject() function sent to the catch()
*/
const promise2 = new Promise((resolve, reject) => {
  reject('oops... ');
})
  .then((value) => {
    console.log(value);
    return 'we';
  })
  .then((value) => {
    console.log(value);
    return 'can';
  })
  .then((value) => {
    console.log(value);
    return 'chain';
  })
  .then((value) => {
    console.log(value);
    return 'promises';
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
/* -------------------------------------------------------------------------- */

/*
  Exapmle
*/
const promise3 = new Promise((resolve, reject) => {
  let x = 5;
  if (x > 10) {
    resolve('Promise resolved');
  } else {
    reject('Promise rejected');
  }
})
  .then((value) => {
    console.log('P4 *** Message : ', value);
  })
  .catch((error) => {
    console.log('P4 *** Message : ', error);
  });
