// Questions and Answers Variable
const Questions = [
  "Javascript is an _______ language?",
  "Which of the following methods can be used to display data in some form using Javascript?",
  "When an operators value is NULL, the type of returned by the unary operator is:",
  "What does the Javascript “debugger” statement do?",
  "Which function is used to serialize an object into a JSON string in Javascript?",
];
const Answers = [
  "Object-Oriented",
  "Object-Based",
  "Procedural",
  "None of the above",
  "document.write()",
  "console.log()",
  "window.alert()",
  "All of the above",
  "Boolean",
  "Object",
  "Undefined",
  "Integer",
  "It acts as a breakpoint in a program",
  "It will debug all the errors in a program",
  "It will debug the error in the current statement if any",
  "All of the above",
  "stringify()",
  "parse()",
  "convert()",
  "None of the above",
];
const rightAnswers = [
  "Object-Oriented",
  "All of the above",
  "Boolean",
  "It acts as a breakpoint in a program",
  "stringify()",
];
var numHighS = 5;
var High_Scores = "highscores";
var highScorestring = localStorage.getItem(High_Scores);
var highscores = JSON.parse(highScorestring) ?? [];
var startBtn = document.querySelector("#start");
function runQuiz() {
  // Add disable button
  startBtn.innerHTML = "What is your high score?";
  startBtn.disabled = true;

  // Set interval for the game score & clock
  var tt = 60;

  // Add timer function
  function timer() {
    if (tt > 0) {
      tt--;
      console.log(tt);
      document.querySelector("p").innerHTML = tt + " Seconds Remaining";
    } else {
      window.alert("Game Over you ran out of time");
      stoptime();
      gameOver();
    }
  }

  // Set interval
  var time = setInterval(() => {
    timer();
  }, 1000);

  // Create stop function
  function stoptime() {
    clearInterval(time);
  }

  // Create a function that resets the questions and answers
  var i = 0;
  function reset() {
    let number = i + 1;
    let header = document.getElementById("questionHead");
    let ListH = document.getElementById("questiontop");
    header.textContent = "Question #" + number;
    ListH.textContent = Questions[i];

    // Create for loop to add individual questions & answers
    for (n = 0; n < 4; n++) {
      let li = document.createElement("li");
      let button = document.createElement("button");
      button.innerHTML = Answers[n + i * 4];
      button.id = "ans";
      li.appendChild(button);
      li.className = "ansbtn";
      document.getElementById("questiontop").appendChild(li);
    }
    test();
    if (i === rightAnswers.length) {
      window.alert("Game Over");
      stoptime();
      gameOver();
    }
  }
  function test() {
    var ansbtns = document.querySelectorAll("#ans");
    for (let a = 0; a < ansbtns.length; a++) {
      ansbtns[a].addEventListener("click", function () {
        let finalans = this.textContent;
        if (finalans === rightAnswers[i]) {
          window.alert("Congrats you got the question right!");
          console.log(i);
          reset(i++);
        } else {
          window.alert("You have selected the wrong answer!");
          console.log(i);
          reset(i++);
          tt = tt - 5;
        }
      });
    }
  }

  // Create a function to show the game is over
  function gameOver() {
    let header = document.getElementById("questionHead");
    header.textContent = "The game is now over!";
    document.querySelector("p").innerHTML =
      "You score for this run was " + tt + " points";
    var initials = window.prompt("Please enter initials");
    var newScore = { tt, initials };
    highscores.push(newScore);
    highscores.sort((a, b) => b.score - a.score);
    highscores.splice(numHighS);
    localStorage.setItem(High_Scores, JSON.stringify(highscores));

    highScore.push(tt + " Points by " + initials);
    console.log(highscores);
  }
  reset();
}

// Add an event listener to generate button
startBtn.addEventListener("click", runQuiz);
