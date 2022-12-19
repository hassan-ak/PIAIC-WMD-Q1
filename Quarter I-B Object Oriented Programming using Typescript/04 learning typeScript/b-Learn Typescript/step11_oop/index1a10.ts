/******************/
/*** step11_oop ***/
/******************/

/************************************************/

/*+++++++++++++*/
/*++ Classes ++*/
/*+++++++++++++*/

/************************************************/

/*-----------------------*/
/*-- Class Expressions --*/
/*-----------------------*/

/************************************************/
// can use expression
// same as anonumus functions
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};
const m = new someClass('Hello, world');

/************************************************/

export {};
