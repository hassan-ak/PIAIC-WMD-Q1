/*
    # Chapter 7. Interfaces
*/
/***********************************************************/

/*-----------------------*/
/*-- Interface Merging --*/
/*-----------------------*/

/***********************************************************/
interface Merged {
  fromFirst: string;
}
interface Merged {
  fromSecond: number;
}
// Equivalent to:
interface Merged {
  fromFirst: string;
  fromSecond: number;
}

/***********************************************************/
interface Window {
  myEnvironmentVariable: string;
}
// window.myEnvironmentVariable; // Type: string

/***********************************************************/

/*******************************/
/*** Member Naming Conflicts ***/
/*******************************/

/***********************************************************/
interface MergedProperties {
  same: (input: boolean) => string;
  different: (input: string) => string;
}
interface MergedProperties {
  same: (input: boolean) => string; // Ok
  // different: (input: number) => string;
}

/***********************************************************/
interface MergedMethods {
  different(input: string): string;
}
interface MergedMethods {
  different(input: number): string; // Ok
}
/***********************************************************/

export {};
