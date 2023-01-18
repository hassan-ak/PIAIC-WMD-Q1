/*
    # Chapter 9. Type Modifiers
*/

/***********************************************************/

/*----------------------*/
/*-- Const Assertions --*/
/*----------------------*/

/***********************************************************/
// / Type: (number | string)[]
[0, ''];
// Type: readonly [0, '']
[0, ''] as const;

/***********************************************************/

/******************************/
/*** Literals to Primitives ***/
/******************************/

/***********************************************************/
// Type: () => string
const getName = () => 'Maria Bamford';
// Type: () => "Maria Bamford"
const getNameConst = () => 'Maria Bamford' as const;

/***********************************************************/
interface Joke {
  quote: string;
  style: 'story' | 'one-liner';
}
function tellJoke(joke: Joke) {
  if (joke.style === 'one-liner') {
    console.log(joke.quote);
  } else {
    console.log(joke.quote.split('\n'));
  }
}
const narrowJoke = {
  quote: 'If you stay alive for no other reason do it for spite.',
  style: 'one-liner' as const,
};
tellJoke(narrowJoke);
const wideObject = {
  quote: 'Time flies when you are anxious!',
  style: 'one-liner',
};
// tellJoke(wideObject);

/***********************************************************/

/*************************/
/*** Read-Only Objects ***/
/*************************/

/***********************************************************/
function describePreference(preference: 'maybe' | 'no' | 'yes') {
  switch (preference) {
    case 'maybe':
      return 'I suppose...';
    case 'no':
      return 'No thanks.';
    case 'yes':
      return 'Yes please!';
  }
}
// Type: { movie: string, standup: string }
const preferencesMutable = {
  movie: 'maybe',
  standup: 'yes',
};
// describePreference(preferencesMutable.movie);
preferencesMutable.movie = 'no'; // Ok
const preferencesReadonly = {
  movie: 'maybe',
  standup: 'yes',
} as const;
describePreference(preferencesReadonly.movie); // Ok
// preferencesReadonly.movie = 'no';

/***********************************************************/

export {};
