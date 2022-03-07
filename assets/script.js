// variables for the page elements
let question = {
    title: 'Commonly used data types do NOT include ___________.',
    options: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 2
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

// section introduction
}


