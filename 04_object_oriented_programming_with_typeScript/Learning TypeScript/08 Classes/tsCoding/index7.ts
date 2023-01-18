/*
    # Chapter 8. Classes
*/
/***********************************************************/

/*-------------------------*/
/*-- Member Visibility --*/
/*-------------------------*/

/***********************************************************/
class Base {
  isPublicImplicit = 0;
  public isPublicExplicit = 1;
  protected isProtected = 2;
  private isPrivate = 3;
  #truePrivate = 4;
}
class Subclass extends Base {
  examples() {
    this.isPublicImplicit; // Ok
    this.isPublicExplicit; // Ok
    this.isProtected; // Ok
    // Error
    // this.isPrivate;
    // this.#truePrivate;
  }
}
new Subclass().isPublicImplicit; // Ok
new Subclass().isPublicExplicit; // Ok
// private
// new Subclass().isProtected;
// new Subclass().isPrivate;

/***********************************************************/
class TwoKeywords {
  private readonly name: string;
  constructor() {
    this.name = 'Anne Sullivan'; // Ok
  }
  log() {
    console.log(this.name); // Ok
  }
}
const two = new TwoKeywords();
// two.name = 'Savitribai Phule';

/***********************************************************/

/******************************/
/*** Static Field Modifiers ***/
/******************************/

/***********************************************************/
class Question {
  protected static readonly answer: 'bash';
  protected static readonly prompt =
    "What's an ogre's favorite programming language?";
  guess(getAnswer: (prompt: string) => string) {
    const answer = getAnswer(Question.prompt);
    // Ok
    if (answer === Question.answer) {
      console.log('You got it!');
    } else {
      console.log('Try again...');
    }
  }
}
// Error
// Question.answer;

/***********************************************************/

export {};
