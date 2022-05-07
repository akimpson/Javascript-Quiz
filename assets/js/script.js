// Create the DOM elements
startButtonEl = document.querySelector(".start-quiz");
quizAreaEl = document.querySelector(".quiz-box");
startGameTextEl = document.querySelector(".start-game-text");
quizButtonEl = document.querySelector(".quiz-buttons");

// Set the quiz header & questions display to none
quizContainerEl = document.querySelector(".quiz-container");
quizContainerEl.style.display = "none";

// Define the question header & the question
questionHeaderEl = document.querySelector(".questionHeader");
questionEl = document.querySelector(".questionFormat");

timerBoxEl = document.querySelector(".timerBox");

// Create the answer buttons for the questions
buttonAEl = document.getElementById("A");
buttonBEl = document.getElementById("B");
buttonCEl = document.getElementById("C");
buttonDEl = document.getElementById("D");
