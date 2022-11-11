/*
    Using Prompt Sync
*/

import PromptSync from 'prompt-sync';
let prompt = PromptSync();

let fullname = prompt('Enter your full fullname : ');
console.log('FullName : ', fullname);
