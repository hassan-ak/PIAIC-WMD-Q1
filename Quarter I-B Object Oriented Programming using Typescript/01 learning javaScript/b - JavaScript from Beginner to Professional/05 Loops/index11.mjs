/* 
    break and continue and labeled blocks
*/

console.log('\n\n');
let groups = [
  ['Martin', 'Daniel', 'Keith'],
  ['Margot', 'Marina', 'Ali'],
  ['Helen', 'Jonah', 'Sambikos'],
  ['Margot', 'M-', 'Ali'],
];

outer: for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith('M')) {
      console.log('found one starting with M:', member);
      break outer;
    }
  }
}
