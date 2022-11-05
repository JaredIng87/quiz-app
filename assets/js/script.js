var body = document.body;
var startButton = document.querySelector(".start-button");
//var timerElement = document.createElement("div");
var headerElement = document.querySelector("header");
var timerElement = document.querySelector(".timer");
var quizQuestion = document.createElement("div");


quizQuestion.setAttribute('style', "margin-top:50px; text-align:center; font-size:25px;");

//body.appendChild(timerElement);
body.appendChild(quizQuestion);



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
    quizQuestion.textContent = "getting there";
    countdown();
})