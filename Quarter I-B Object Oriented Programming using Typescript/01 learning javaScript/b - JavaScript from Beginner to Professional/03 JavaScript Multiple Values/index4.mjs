let arr = [0, 1, 2];
console.log(typeof arr);

let dog = {
  dogName: 'JavaScript',
  weight: 2.4,
  color: 'brown',
  breed: 'chihuahua',
  age: 3,
  burglarBiter: true,
};
console.log(dog);
console.log(dog['color']);
console.log(dog.color);
dog['color'] = 'blue';
dog.weight = 2.3;
console.log(dog);
dog['age'] = 'three';
let variable = 'age';
console.log(dog[variable]);
variable = 'breed';
console.log(dog[variable]);
dog[variable] = 'dachshund';
console.log(dog['breed']);
