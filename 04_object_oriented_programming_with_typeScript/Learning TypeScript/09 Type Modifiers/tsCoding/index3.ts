/*
    # Chapter 9. Type Modifiers
*/
/***********************************************************/

/*--------------------*/
/*-- Type Operators --*/
/*--------------------*/

/***********************************************************/

/*************/
/*** keyof ***/
/*************/

/***********************************************************/
interface Ratings {
  audience: number;
  critics: number;
}
function getRating(ratings: Ratings, key: string): number | void {
  // return ratings[key];
}
const ratings: Ratings = { audience: 66, critics: 84 };
getRating(ratings, 'audience'); // Ok
getRating(ratings, 'not valid'); // Ok, but shouldn't be

/***********************************************************/
function getCountLiteral(
  ratings: Ratings,
  key: 'audience' | 'critics'
): number {
  return ratings[key]; // Ok
}
const ratings1: Ratings = { audience: 66, critics: 84 };
getCountLiteral(ratings1, 'audience'); // Ok
// getCountLiteral(ratings1, 'not valid');

/***********************************************************/
function getCountKeyof(ratings: Ratings, key: keyof Ratings): number {
  return ratings[key]; // Ok
}
const ratings2: Ratings = { audience: 66, critics: 84 };
getCountKeyof(ratings2, 'audience'); // Ok
// getCountKeyof(ratings2, 'not valid');

/***********************************************************/

/**************/
/*** typeof ***/
/**************/

/***********************************************************/
const original = {
  medium: 'movie',
  title: 'Mean Girls',
};
let adaptation: typeof original;
if (Math.random() > 0.5) {
  adaptation = { ...original, medium: 'play' }; // Ok
} else {
  // Error: Type 'number' is not assignable to type 'string'.
  // adaptation = { ...original, medium: 2 };
}

/***********************************************************/

/*+++++++++++++++++++*/
/*+++ keyof typeof ++*/
/*+++++++++++++++++++*/

/***********************************************************/
const ratings101 = {
  imdb: 8.4,
  metacritic: 82,
};
function logRating(key: keyof typeof ratings101) {
  console.log(ratings101[key]);
}
logRating('imdb'); // Ok
// logRating('invalid');

/***********************************************************/

export {};
