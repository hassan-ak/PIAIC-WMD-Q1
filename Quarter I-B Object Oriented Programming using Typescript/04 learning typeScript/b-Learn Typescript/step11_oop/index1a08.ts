/******************/
/*** step11_oop ***/
/******************/

/************************************************/

/*+++++++++++++*/
/*++ Classes ++*/
/*+++++++++++++*/

/************************************************/

/*----------------*/
/*-- this Types --*/
/*----------------*/

/************************************************/
// return type is this not box
class Box {
  contents: string = '';
  set(value: string) {
    this.contents = value;
    return this;
  }
}

class ClearableBox extends Box {
  clear() {
    this.contents = '';
  }
}
const a = new ClearableBox();
const b = a.set('hello');
/************************************************/
class Box1 {
  content: string = '';
  sameAs(other: this) {
    return other.content === this.content;
  }
}

/************************************************/
class Box2 {
  content: string = '';
  sameAs(other: this) {
    return other.content === this.content;
  }
}
class DerivedBox extends Box2 {
  otherContent: string = '?';
}
const base = new Box2();
const derived = new DerivedBox();
// Error
// derived.sameAs(base);

/************************************************/

export {};
