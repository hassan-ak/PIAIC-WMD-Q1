/*
    Practice exercise 3.5
        1. Create an object named people that contains an empty array that is called friends.
        2. Create three variables, each containing an object, 
        that contain one of your  friend's first names, last names, and an ID value.
        3. Add the three friends to the friend array.
        4. Output it to the console.
*/

var people = { friends: [] };
console.log('People : ', people);
var variable1 = {
  firstName: 'Zubair',
  lastName: 'Hafeez',
  id: 9,
};
console.log('Variable 01 : ', variable1);
var variable2 = {
  firstName: 'Ibtisam',
  lastName: 'Elahi',
  id: 72,
};
console.log('Variable 02 : ', variable2);
var variable3 = {
  firstName: 'Rizwan',
  lastName: 'Arif',
  id: 39,
};
console.log('Variable 03 : ', variable3);
people.friends.splice(0, 0, variable1, variable2, variable3);
console.log('People : ', people);
