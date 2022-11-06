var body = document.body;
var timeLeft = 75;
var startButton = document.querySelector(".start-button");
var headerElement = document.querySelector("header");
var timerElement = document.querySelector(".timer");
var quizQuestion = document.createElement("div");
var answerButtons = document.createElement("div");
var buttonOne = document.createElement('button');
var buttonTwo = document.createElement('button');
var buttonThree = document.createElement('button');
var buttonFour = document.createElement('button');


answerButtons.appendChild(buttonOne);
answerButtons.appendChild(buttonTwo);
answerButtons.appendChild(buttonThree);
answerButtons.appendChild(buttonFour);

quizQuestion.setAttribute('style', "margin-top:50px; text-align:center; font-size:25px;");
answerButtons.setAttribute('style', "margin-top:50px; text-align:center; font-size:25px;");


function questionOne() {
    quizQuestion.textContent = "Which language creates the framework for your web application?";
    buttonOne.textContent = 'HTML';
    buttonTwo.textContent = 'CSS';
    buttonThree.textContent = 'JavaScript';
    buttonFour.textContent = 'English';
    buttonOne.setAttribute("data-state", "true");
    buttonTwo.setAttribute("data-state", "false");
    buttonThree.setAttribute("data-state", "false");
    buttonFour.setAttribute("data-state", "false");
    answerButtons.addEventListener('click', function(event) {
        var element = event.target;
        if (element.matches("button")) {
            var state = element.getAttribute("data-state");
            if (state === "true") {
                headerElement.classList.add('correct');
            } 
            else {
                headerElement.classList.add('incorrect');
                timeLeft -= 15;
            } 
        }
        questionTwo();
    });
};


function questionTwo(event) {
    quizQuestion.textContent = "Which language creates the style for your web application?";
    buttonOne.textContent = 'HTML';
    buttonTwo.textContent = 'CSS';
    buttonThree.textContent = 'JavaScript';
    buttonFour.textContent = 'English';
    buttonOne.setAttribute("data-state", "false");
    buttonTwo.setAttribute("data-state", "true");
    buttonThree.setAttribute("data-state", "false");
    buttonFour.setAttribute("data-state", "false");
    answerButtons.addEventListener('click', function(event) {
        var element = event.target;
        if (element.matches("button")) {
            var state = element.getAttribute("data-state");
            if (state === "true") {
                headerElement.classList.add('correct');
            } 
            else {
                headerElement.classList.add('incorrect');
                timeLeft -= 15;
            } 
        }
        questionThree();
    });
};

function questionThree() {
    quizQuestion.textContent = "Which language creates the interactivity for your web application?";
    buttonOne.textContent = 'HTML';
    buttonTwo.textContent = 'CSS';
    buttonThree.textContent = 'JavaScript';
    buttonFour.textContent = 'English';
    buttonOne.setAttribute("data-state", "false");
    buttonTwo.setAttribute("data-state", "false");
    buttonThree.setAttribute("data-state", "true");
    buttonFour.setAttribute("data-state", "false");
    answerButtons.addEventListener('click', function(event) {
        var element = event.target;
        if (element.matches("button")) {
            var state = element.getAttribute("data-state");
            if (state === "true") {
                headerElement.classList.add('correct');
            } 
            else {
                headerElement.classList.add('incorrect');
                timeLeft -= 15;
            } 
        }
    });
};




function countdown() {

var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
        timerElement.textContent = timeLeft + ' Seconds Remaining';
        timeLeft--;
    } else if (timeLeft === 1) {
        timerElement.textContent = timeLeft + ' Second Remaining';
        timeLeft--;
    } else {
        timerElement.textContent = '';
        clearInterval(timeInterval);
    }
}, 1000);
};

startButton.addEventListener("click", function() {
    body.appendChild(quizQuestion);
    body.appendChild(answerButtons);
    startButton.disabled = true;
    questionOne();
    countdown();
    
});

