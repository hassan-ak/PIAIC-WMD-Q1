# Assignemt Class 06 - Project-Based Programming By Hira Khan and Adil Altaf (2022/11/12)

## Question 01

- Counter using Async Await
  - This exercise will demonstrate how to use await to wait on a Promise inside an async function. Using await and async, create a counter with timeout(), and increment a global counter value.
    1. Create a global value for a counter.
    2. Create a function that takes one argument. Return the result of a new Promise, setting a setTimeout() function that will contain the resolve instance.
    3. Increment the counter within setTimeout(), adding one every second. Resolve the Promise with the value of the counter and the value of the variable that was in the function argument.
    4. Create an asynchronous function that outputs into the console the value of the global counter and the value of the argument of the function.
    5. Create a variable to capture the returned resolve value from the await function. Output that result into the console.
    6. Create a loop to iterate 10 times, incrementing the value and invoking the async function, passing the value of the increment variable as the parameter in the function.

## Question 02

- Password checker
  - Using an array of allowed passwords, this exercise will create an application to check if one of these password string values exists in an array that lists all the accepted passwords. Set a Promise to check if the password is valid, and upon the result either resolve with the status of true or reject with the status of false. Return the check results.
    1. Create an array of allowed passwords.
    2. Create a login function that will check if the argument is a value that is included in the passwords array. You can use indexof() or the includes() method to check the array for a value and return a Boolean value of the result.
    3. Add a function that returns a Promise. Using resolve and reject, return a JavaScript object with the Boolean of true or false to indicate the password validity status.
    4. Create a function that checks the password, sending it to the login function, and using then() and catch(), outputs the result of either the rejected password or the resolved password.
    5. Send several passwords, some within the array, others not, to the checker function.

## Question 03

- Breakfast example using functions
  - Write code that must achieve the following requirements:
    - First, start making breakfast
      - Start making an omelette immediately. This should take 5 seconds.
      - Start making a paratha after 2 seconds. It should take 3 seconds to make.
      - Start making coffee after 4 seconds. It should be ready in 1 second.
    - While you're making breakfast, ask wife or husband what she wants for lunch
      - He or she will respond after 10 seconds.
    - Then, ask him or her where to go for dinner.
      - Response should be received immediately.

## Question 04

- Breakfast example using callback
  - Write code that must achieve the following requirements:
    - First, start making breakfast
      - Start making an omelette immediately. This should take 5 seconds.
      - Start making a paratha after 2 seconds. It should take 3 seconds to make.
      - Start making coffee after 4 seconds. It should be ready in 1 second.
    - While you're making breakfast, ask wife or husband what she wants for lunch
      - He or she will respond after 10 seconds.
    - Then, ask him or her where to go for dinner.
      - Response should be received immediately.

## Question 05

- Breakfast example using promises
  - Write code that must achieve the following requirements:
    - First, start making breakfast
      - Start making an omelette immediately. This should take 5 seconds.
      - Start making a paratha after 2 seconds. It should take 3 seconds to make.
      - Start making coffee after 4 seconds. It should be ready in 1 second.
    - While you're making breakfast, ask wife or husband what she wants for lunch
      - He or she will respond after 10 seconds.
    - Then, ask him or her where to go for dinner.
      - Response should be received immediately.

## Question 06

- BreakFast example using async / Await
  - Write code that must achieve the following requirements:
    - First, start making breakfast
      - Start making an omelette immediately. This should take 5 seconds.
      - Start making a paratha after 2 seconds. It should take 3 seconds to make.
      - Start making coffee after 4 seconds. It should be ready in 1 second.
    - While you're making breakfast, ask wife or husband what she wants for lunch
      - He or she will respond after 10 seconds.
    - Then, ask him or her where to go for dinner.
      - Response should be received immediately.
