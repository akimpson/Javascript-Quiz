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

// Answer Buttons
buttonAEl = document.getElementById("A");
buttonBEl = document.getElementById("B");
buttonCEl = document.getElementById("C");
buttonDEl = document.getElementById("D");

// Timer and Score
var timer = "60";
var score = "0";

// Add Questions and Answers
var questionNumber = [
  "Question 1",
  "Question 2",
  "Question 3",
  "Question 4",
  "Question 5",
  "Question 6",
];
var question = [
  "Which one is NOT a data type in Javascript?",
  "What is an array?",
  "What is the difference between a local and global variable?",
  "Which one is NOT a comparison expression?",
  "Where is the script tag located in the html file?",
  "What is the purpose of a for loop?",
];

var aAnswer = [
  "a. Boolean",
  "a. A group of events",
  "a. console.log();",
  "a. Local variables only contain strings and global variables contain all data types including strings, numbers and boolean data.",
  "a. &&",
  "a. In the <head> tag",
  "a. To cycle through a set of commands a set amount of time",
];
var bAnswer = [
  "b. String",
  "b. A list of elements stored in a single variable. ",
  "b. window.alert(); ",
  "b. Local variables are defined outside functions and can be accessed anywhere in the code, whereas global variables can only be accessed in the functions they are defined in.",
  "b. ||",
  "b. At the bottom of the <body> tag ",
  "b. To tell the user the purpose of the code",
];
var cAnswer = [
  "c. Variable",
  "c.A method to do mathematical operations",
  "c.message();",
  "c. Global variables can be used by anyone around the world, local variables are only defined on your machine. ",
  "c. <=",
  "c. At the top of the <body> tag",
  "c. To compare values of variables",
];
var dAnswer = [
  "d. Number",
  "d. A type of function",
  "d. console.dir();",
  "d. Local variables can only be accessed in the functions they are defined in, whereas global variables are defined outside functions and can be used anywhere in the code.",
  "d. !!",
  "d. Before the <head> tag",
  "d. To set a timer",
];
