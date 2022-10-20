// *** Objects *** //

//// *** Object Types *** ////
const poet = {
  born: 1935,
  name: 'Mary Oliver',
};

poet['born']; // Type: number
poet.name; // Type: string
// poet.end; // returns error

//// Declaring Object Types
var poetLater: {
  born: number;
  name: string;
};
// Ok
poetLater = {
  born: 1935,
  name: 'Mary Oliver',
};
// poetLater = 'Sappho';
// Error: Type 'string' is not assignable to
// type '{ born: number; name: string; }'

//// Aliased Object Types
type Poet = {
  born: number;
  name: string;
};
// var poetLater: Poet;
// Ok
var poetLater: Poet = {
  born: 1935,
  name: 'Sara Teasdale',
};
// poetLater = 'Emily Dickinson';
// Error: Type 'string' is not assignable to 'Poet'.
