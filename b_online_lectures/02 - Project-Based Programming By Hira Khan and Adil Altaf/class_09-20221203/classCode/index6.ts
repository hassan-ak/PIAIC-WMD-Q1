type Alexander = { age: number; name: string };

let alexander: Alexander = { age: 21, name: 'Alexander' };

// Error
let extraToAlexander: Alexander = {
  age: 21,
  name: 'Alexander',
  // // location: 'USA',
};
