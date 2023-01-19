// Class 07

/*
  CallBack
*/

/***********************************************************************/
const doSomeThing = (callback) => {
  console.log('Do Something');
  callback();
};
const doSomeThing2 = () => {
  console.log('Callback Called');
};
doSomeThing(doSomeThing2);
/***********************************************************************/
console.log('First');
setTimeout(() => {
  console.log('Second');
}, 3000);
console.log('Third');
/***********************************************************************/
const loginUser = (email, pass, callbackFunc) => {
  setTimeout(() => {
    callbackFunc(email);
  }, 2000);
};

const getUserVideos = (email, cb) => {
  setTimeout(() => {
    cb(['Video1', 'Video2', 'Video3']);
  }, 3000);
};
loginUser('abc@abc.com', 123, (email) => {
  console.log('User Loged in');
  getUserVideos(email, (videos) => {
    console.log('got videos : ', videos);
  });
});
/***********************************************************************/
const promiseFunc = (myMarks) => {
  return new Promise((resolve, reject) => {
    if (myMarks >= 70) {
      resolve('Passed');
    } else {
      reject('Failed');
    }
  });
};

promiseFunc(65)
  .then((value) => {
    console.log(value);
    console.log('Resolved');
  })
  .catch((value) => {
    console.log(value);
    console.log('Rejected');
  });
/***********************************************************************/
const loginUserPromise = (email, pass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'abc@abc.com' && pass === 1234) {
        resolve(email);
      } else {
        reject('Wrong email or Password');
      }
    }, 2000);
  });
};
const getUserVideosPromise = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email) {
        resolve(['Video1', 'Video2', 'Video3']);
      } else {
        reject('Please provide email');
      }
    }, 2000);
  });
};
loginUserPromise('abc@abc.com', 1234)
  .then((value) => {
    console.log('Loged in');
    return getUserVideosPromise(value);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log('Error : ', value);
  })
  .then(() => {
    console.log('User called');
  });
/***********************************************************************/
async function sFunc(email, pass) {
  try {
    const r1 = await loginUserPromise(email, pass);
    console.log(r1);
    const r2 = await getUserVideosPromise(r1);
    console.log(r2);
  } catch (error) {
    console.log(error);
  }
}
sFunc('abc@abc.com', 1234);
/***********************************************************************/
function job21() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise1 = job21();

promise1

  .then(function () {
    console.log('Success 1');
  })

  .then(function () {
    console.log('Success 2');
  })

  .then(function () {
    console.log('Success 3');
  })

  .catch(function () {
    console.log('Error 1');
  })

  .then(function () {
    console.log('Success 4');
  });
/***********************************************************************/
function job2(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise2 = job2(true);

promise2

  .then(function (data) {
    console.log(data);

    return job2(false);
  })

  .catch(function (error) {
    console.log(error);

    return 'Error caught';
  })

  .then(function (data) {
    console.log(data);

    return job2(true);
  })

  .catch(function (error) {
    console.log(error);
  });
/***********************************************************************/
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .then(function (data) {
    if (data !== 'victory') {
      throw 'Defeat';
    }

    return job(true);
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log(error);

    return job(false);
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error);

    return 'Error caught';
  })

  .then(function (data) {
    console.log(data);

    return new Error('test');
  })

  .then(function (data) {
    console.log('Success:', data.message);
  })

  .catch(function (data) {
    console.log('Error:', data.message);
  });
/***********************************************************************/
