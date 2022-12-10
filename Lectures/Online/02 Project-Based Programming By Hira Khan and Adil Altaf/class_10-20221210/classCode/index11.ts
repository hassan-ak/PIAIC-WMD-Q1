let returnStringOrNumber: (() => string) | number;
// Error
// // returnStringOrNumber = 'Alexander';
returnStringOrNumber = 7;
returnStringOrNumber = () => 'Alexander';
// Error
// // returnStringOrNumber = () => 7;

// Error
// // returnStringOrNumber = function (): number {
// //   return 7;
// // };

returnStringOrNumber = function (): string {
  return '7';
};

returnStringOrNumber = 7;

let aboutImran: (name: string) => number;

aboutImran = (name: string) => {
  return 7;
};

export {};
