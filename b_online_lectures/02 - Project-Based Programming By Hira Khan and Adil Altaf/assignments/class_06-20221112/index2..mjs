/*
    Password checker
        Using an array of allowed passwords, this exercise will create 
        an application to check if one of these password string values 
        exists in an array that lists all the accepted  passwords. Set
        a Promise to check if the password is valid, and upon the 
        result either resolve with the status of true or reject with the
        status of false. Return the check results.
        1. Create an array of allowed passwords.
        2. Create a login function that will check if the argument is a 
        value that is included in the passwords array. You can use indexof()
        or the includes() method to check the array for a value and return a 
        Boolean value of the result.
        3. Add a function that returns a Promise. Using resolve and reject, 
        return a JavaScript object with the Boolean of true or false to indicate
        the password validity status. 
        4. Create a function that checks the password, sending it to the login 
        function, and using then() and catch(), outputs the result of either 
        the rejected password or the resolved password.
        5. Send several passwords, some within the array, others not, to the 
        checker function.
*/
var password = ['a123', 'qaz', '8787', 'asdf', 'jack'];

function loginFunction(params) {
  return password.includes(params);
}

function promiseFunction(password) {
  return new Promise((resolve, reject) => {
    if (password) {
      resolve({
        status: true,
      });
    } else {
      reject({
        status: false,
      });
    }
  });
}

async function checklogin(pass) {
  await promiseFunction(loginFunction(pass))
    .then((value) => {
      console.log('\n');
      console.log('Entered Password : ', pass);
      console.log(value);
      console.log('\n');
    })
    .catch((value) => {
      console.log('\n');
      console.log('Entered Password : ', pass);
      console.log(value);
      console.log('\n');
    });
}
checklogin(123);
checklogin('8787');
checklogin('pass');
checklogin('jack');
