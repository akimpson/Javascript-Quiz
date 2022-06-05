// DOM Elements

startButtonEl = document.querySelector(".start-quiz");
quizAreaEl = document.querySelector(".quiz-box");
startGameTextEl = document.querySelector(".start-game-text");
quizButtonEl = document.querySelector(".quiz-buttons");

// Set quiz header and questions display to none
quizContainerEl = document.querySelector(".quiz-container");
quizContainerEl.style.display = "none";

// Define the question header and the question
questionHeaderEl = document.querySelector(".questionHeader");
questionEl = document.querySelector(".questionFormat");

timerBoxEl = document.querySelector(".timerBox");

// Answer buttons
buttonAEl = document.getElementById("A");
buttonBEl = document.getElementById("B");
buttonCEl = document.getElementById("C");
buttonDEl = document.getElementById("D");

// Timer and score
var timer = "60";
var score = "0";
