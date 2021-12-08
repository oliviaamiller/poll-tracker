// import functions and grab DOM elements

const pollFormEl = document.querySelector('#poll-form');
const submitButtonEl = document.querySelector('#submit-button');
const closeButtonEl = document.querySelector('#close-button');
const aAddButtonEl = document.querySelector('#a-add-button');
const bAddButtonEl = document.querySelector('#b-add-button');
const aUndoButtonEl = document.querySelector('#a-undo-button');
const bUndoButtonEl = document.querySelector('#b-undo-button');
const currentContainerEl = document.querySelector('#current-container');
const closedContainerEl = document.querySelector('#closed-container');


// let state
let question = '';
let optionA = '';
let optionB = '';
let aVotes = 0;
let bVotes = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
