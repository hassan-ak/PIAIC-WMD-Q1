/****************************************************************/
// Function
function doSomething1() {
  console.log('Hello');
}
doSomething1();
console.log('End');

/****************************************************************/
// Set timeout with console
function doSomething2() {
  setTimeout(() => {
    console.log('Hello');
  }, 1000);
}
doSomething2();
console.log('End');
/****************************************************************/
// Set timeout with return
function doSomething3() {
  setTimeout(() => {
    return 'Hello';
  }, 1000);
}
var a = doSomething3();
console.log(a);
console.log('End');
/****************************************************************/
// Mulitple callbacks
function eggFriedCb1(params) {
  console.log(params);
}
function makeFryAnda1(callback) {
  setTimeout(() => {
    callback('Egg Fried');
  }, 2000);
}
function toastBread1(cb) {
  setTimeout(() => {
    cb('Toast Done');
  }, 1000);
}
function callback1(params) {
  console.log(params);
}
makeFryAnda1(eggFriedCb1);
toastBread1(callback1);
console.log('End');
/****************************************************************/
// CallBack Hell
function makeFryAnda(callback) {
  setTimeout(() => {
    callback('Egg Fried');
  }, 2000);
}
function toastBread(cb) {
  setTimeout(() => {
    cb('Toast Done');
  }, 1000);
}
toastBread(function name(params) {
  console.log(params);
  makeFryAnda(function name(params) {
    console.log(params);
  });
});
console.log('End');
/****************************************************************/
// Promises
let toastPromise = new Promise((resolve, reject) => {
  let check = true;
  if (check) {
    resolve('Make Toast');
  } else {
    reject('No cook today');
  }
});
toastPromise
  .then((value) => {
    console.log(value);
    return 'Making Toast';
  })
  .then((value) => {
    console.log(value);
    return 'Toast is ready';
  })
  .then((value) => {
    console.log(value);
    return 'Make Cofee';
  })
  .then((value) => {
    console.log(value);
    return 'Making Cofee';
  })
  .then((value) => {
    console.log(value);
    return 'Cofee is ready';
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
/****************************************************************/
// Promises
function promsieFunction() {
  return new Promise((resolve, reject) => {
    let check = true;
    if (check) {
      resolve('Make Toast');
    } else {
      reject('No cook today');
    }
  });
}
promsieFunction()
  .then((value) => {
    console.log(value);
    return 'Making Toast';
  })
  .then((value) => {
    console.log(value);
    return 'Toast is ready';
  })
  .then((value) => {
    console.log(value);
    return 'Make Cofee';
  })
  .then((value) => {
    console.log(value);
    return 'Making Cofee';
  })
  .then((value) => {
    console.log(value);
    return 'Cofee is ready';
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
/****************************************************************/
Promises;
function toastFunction() {
  return new Promise((resolve, reject) => {
    console.log('Make Toast');
    let check = true;
    setTimeout(() => {
      if (check) {
        resolve('Making Toast');
      } else {
        reject('No cooking today');
      }
    }, 1000);
  });
}
function cofeeFunction() {
  return new Promise((resolve, reject) => {
    console.log('Make Cofee');
    let check = false;
    setTimeout(() => {
      if (check) {
        resolve('Making Cofee');
      } else {
        reject('No Cofee today');
      }
    }, 1000);
  });
}
toastFunction()
  .then((value) => {
    console.log(value);
    return 'Toast is ready';
  })
  .then((value) => {
    console.log(value);
    return cofeeFunction();
  })
  .then((value) => {
    console.log(value);
    return 'Cofee is ready';
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
/****************************************************************/
function toastFunction() {
  return new Promise((resolve, reject) => {
    console.log('Make Toast');
    let check = true;
    setTimeout(() => {
      if (check) {
        resolve('Making Toast');
      } else {
        reject('No cooking today');
      }
    }, 1000);
  });
}
function cofeeFunction() {
  return new Promise((resolve, reject) => {
    console.log('Make Cofee');
    let check = true;
    setTimeout(() => {
      if (check) {
        resolve('Making Cofee');
      } else {
        reject('No Cofee today');
      }
    }, 1000);
  });
}
async function getResult1() {
  let result1 = await toastFunction();
  return result1;
}
async function getResult2() {
  let result2 = await cofeeFunction();
  return result2;
}

getResult1()
  .then((value) => {
    console.log(value);
    return 'Toast is ready';
  })
  .then((value) => {
    console.log(value);
    return getResult2();
  })
  .then((value) => {
    console.log(value);
    return 'Cofee is ready';
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
/****************************************************************/
