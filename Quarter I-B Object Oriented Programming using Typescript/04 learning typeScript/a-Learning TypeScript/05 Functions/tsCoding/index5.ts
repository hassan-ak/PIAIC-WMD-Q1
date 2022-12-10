/*
    # Chapter 5. Functions
*/

/***********************************************************/

/*------------------------*/
/*-- Function Overloads --*/
/*------------------------*/

/***********************************************************/
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
}
// Ok
createDate(554356800);
// Ok
createDate(7, 27, 1987);
// Error
// // createDate(4, 1);

/***********************************************************/

/************************************/
/*** Call-Signature Compatibility ***/
/************************************/

/***********************************************************/
// Ok
function format(data: string): string;
// Ok
function format(data: string, needle: string, haystack: string): string;
// Error
// // function format(getData: () => string): string;
function format(data: string, needle?: string, haystack?: string) {
  return needle && haystack ? data.replace(needle, haystack) : data;
}

/***********************************************************/

export {};
