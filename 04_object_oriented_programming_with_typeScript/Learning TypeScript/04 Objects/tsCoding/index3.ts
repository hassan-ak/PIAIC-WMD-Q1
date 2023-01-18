/*
    Chapter 4. Objects
*/

/***********************************************************/

/*----------------------------*/
/*-- Unions of Object Types --*/
/*----------------------------*/

/***********************************************************/

/***********************************/
/*** Inferred Object-Type Unions ***/
/***********************************/

/***********************************************************/
const poem =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true };
poem.name; // string
poem.pages; // number | undefined
poem.rhymes; // booleans | undefined

/***********************************************************/

/***********************************/
/*** Explicit Object-Type Unions ***/
/***********************************/

/***********************************************************/
type PoemWithPages = {
  name: string;
  pages: number;
};
type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};
type Poem3 = PoemWithPages | PoemWithRhymes;
const poem3: Poem3 =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7 }
    : { name: 'Her Kind', rhymes: true };
poem3.name; // Ok
// Error
// // poem3.pages;
// Error
// // poem3.rhymes;

/***********************************************************/

/******************************/
/*** Narrowing Object Types ***/
/******************************/

/***********************************************************/
if ('pages' in poem3) {
  poem3.pages; // Ok: poem is narrowed to PoemWithPages
} else {
  poem3.rhymes; // Ok: poem is narrowed to PoemWithRhymes
}
// Error
// // if (poem3.pages) {...}

/***********************************************************/

/****************************/
/*** Discriminated Unions ***/
/****************************/

/***********************************************************/
type PoemWithPages1 = {
  name: string;
  pages: number;
  type: 'pages';
};
type PoemWithRhymes1 = {
  name: string;
  rhymes: boolean;
  type: 'rhymes';
};
type Poem4 = PoemWithPages1 | PoemWithRhymes1;
const poem4: Poem4 =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7, type: 'pages' }
    : { name: 'Her Kind', rhymes: true, type: 'rhymes' };
if (poem4.type === 'pages') {
  console.log(`It's got pages: ${poem4.pages}`); // Ok
} else {
  console.log(`It rhymes: ${poem4.rhymes}`);
}
poem4.type; // Type: 'pages' | 'rhymes'
poem.pages;

/***********************************************************/
