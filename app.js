// import functions and grab DOM elements

const pollFormEl = document.querySelector('#poll-form');
const closeButtonEl = document.querySelector('#close-button');
const aAddButtonEl = document.querySelector('#a-add-button');
const bAddButtonEl = document.querySelector('#b-add-button');
const aUndoButtonEl = document.querySelector('#a-undo-button');
const bUndoButtonEl = document.querySelector('#b-undo-button');
const currentContainerEl = document.querySelector('#current-container');
const closedContainerEl = document.querySelector('#closed-container');

const form = document.querySelector('form');


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

aAddButtonEl.addEventListener('click', () => {
    aVotes++;
});

bAddButtonEl.addEventListener('click', () => {
    bVotes++;
});

aUndoButtonEl.addEventListener('click', () => {
    aVotes--;
});

bUndoButtonEl.addEventListener('click', () => {
    bVotes--;
});

pollFormEl.addEventListener('submit', (e) => {
  // prevent default form behavior
    e.preventDefault();

  // get the name data from the form
    const pollData = new FormData(form);

  // set the state to this data from the form 
    question = pollData.get('question');
    optionA = pollData.get('option-a');
    optionB = pollData.get('option-b');

  // reset the form 
    pollFormEl.reset();

});