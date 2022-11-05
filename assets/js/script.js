var body = document.body;
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


buttonOne.textContent = 'one';
buttonTwo.textContent = 'two';
buttonThree.textContent = 'three';
buttonFour.textContent = 'four';


function countdown() {
    var timeLeft = 75;

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
    quizQuestion.textContent = "getting there";
    countdown();
});