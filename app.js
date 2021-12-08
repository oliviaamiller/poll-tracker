// import functions and grab DOM elements
import { renderPoll } from './render-poll.js';
  

const pollFormEl = document.querySelector('#poll-form');

const closeButtonEl = document.querySelector('#close-button');
const aAddButtonEl = document.querySelector('#a-add-button');
const bAddButtonEl = document.querySelector('#b-add-button');
const aUndoButtonEl = document.querySelector('#a-undo-button');
const bUndoButtonEl = document.querySelector('#b-undo-button');

const currentPollEl = document.querySelector('#current-poll');
const closedPollsEl = document.querySelector('#closed-polls');

const questionLabelEl = document.querySelector('#question');
const aLabelEl = document.querySelector('#option-a');
const bLabelEl = document.querySelector('#option-b');

const form = document.querySelector('form');

const closedPollsArray = [];


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

    displayCurrentPoll();
});

bAddButtonEl.addEventListener('click', () => {
    bVotes++;

    displayCurrentPoll();
});

aUndoButtonEl.addEventListener('click', () => {
    aVotes--;

    displayCurrentPoll();
});

bUndoButtonEl.addEventListener('click', () => {
    bVotes--;

    displayCurrentPoll();
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

  // reflect poll changes in the DOM 
    displayCurrentPoll();
});

closeButtonEl.addEventListener('click', () => {
  // add the current poll to an array of polls in state
    const poll = makePoll();


    closedPollsArray.push(poll);

  // display in DOM
    displayAllPolls();

  // reset the initial state to start with a new form
    question = '';
    optionA = '';
    optionB = '';
    aVotes = 0;
    bVotes = 0;

    displayCurrentPoll();
});

function displayCurrentPoll() {
    // clear out the current game div
    currentPollEl.textContent = '';

    // change the label to show the question
    questionLabelEl.textContent = question;

    //change the labels to show option A and option B
    aLabelEl.textContent = optionA;
    bLabelEl.textContent = optionB;

    // call the renderPoll function to create a poll element

    const poll = makePoll();

    const newPoll = renderPoll(poll);

    console.log(newPoll);

    currentPollEl.append(newPoll);
}

function displayAllPolls() {
    // clear out the closed polls list in the DOM
    closedPollsEl.textContent = '';

    // loop through the past polls in the state
    for (let closedPoll of closedPollsArray) {
        const container = renderPoll(closedPoll);

        closedPollsEl.append(container);
    }
}

function makePoll() {
    return {
        question: question, 
        optionA: optionA,
        optionB: optionB, 
        aVotes: aVotes,
        bVotes: bVotes
    };
}


