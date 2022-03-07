// variables for the page elements
let question = {
    title: 'Commonly used data types do NOT include ___________.',
    options: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 2
};

let question = {
    title: 'The condition in an if/else statement is enclosed with ___________.',
    options: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 2
};

let question = {
    title: 'Arrays in Javascript can be used to store _____________.',
    options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 2
};

let question = {
    title: 'String values must be enclosed within ______________.',
    options: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    correctAnswer: 3
};

let question = {
    title: 'A very useful tool used during development and debugging for printing content to the debugger is ______________.',
    options: ['Javascript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 4
};

function showQuestion (q) {
    /* 1. select the DOM element */
    let titleDiv = document.getElementById('title');

    /* 2. modify it */
    titleDiv.textContent = q.title;

    /* 3. Query select */
    let opts = document.querySelectorAll('.options');

    opts.forEach(function(element, index){
        element.textContent = q.solution[index];        
    });

 


// timer and score selector
let timeEl = document.querySelector("p.time");
let secondsLeft = 90;
let scoreEl = document.querySelector("#score");

// section introduction
const introEl = document.querySelector("#intro");

//Questions
const questionEl = document.querySelector("#questions");

let questionEl = document.querySelector("#questions");

let questionCount = 0;

const yesornoEl = document.querySelector("yesorno");

const finalEl = document.querySelector("#final");

let nameInput = document.querySelector("#name");

const highscoresEl = document.querySelector("#highscores");

let scoreListEl = document.querySelector("#score-list");

let scoreList = [];

// buttons
const startBtn = document.querySelector("#start");

const ansRtn = document.querySelectorAll("button.ansBtn");

const ans1Btn = document.querySelector("#answer1");

const ans2Btn = document.querySelector("#answer2");

const ans3Btn = document.querySelector("#answer3");

const ans4Btn = document.querySelector("#answer4");

const submitScrBtn = document.querySelector("#submit-score");
// goback
const goBackBtn = document.querySelector("#goback");
// clearscores
const clearScrBtn = document.querySelector("#clearscores");
// view-scores
const viewScrBtn = document.querySelector("#view-scores");
}
const questions = [ // array of objects
    { 
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "3"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correctAnswer: "3"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "2"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        correctAnswer: "3"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "4"
    }
];
// Timer
function setTime() {
    let timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s` ;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}
