var multipleChoices = [
    {
    question: "question",
    answers: ["a1", "a2", "a3", "a4"],
    correctAnswer: 0,
    },
    {
    question: "question",
    answers: ["a1", "a2", "a3", "a4"],
    correctAnswer: 1,
    },
    {
    question: "question",
    answers: ["a1", "a2", "a3", "a4"],
    correctAnswer: 2,
    },
    {
    question: "question",
    answers: ["a1", "a2", "a3", "a4"],
    correctAnswer: 3,
    },
    {
    question: "question",
    answers: ["a1", "a2", "a3", "a4"],
    correctAnswer: 0,
    }
]

var startButton = document.querySelector("#start");
var question = document.querySelector("#question");
var answers = document.querySelectorAll("li");
var startPage = document.querySelector("#startPage");
var timer = document.querySelector("#timer");
var timeLeft = 60;


startButton.addEventListener("click", function(){
    startPage.style.display = "none";
    setTimer ();

    for(i=0; i < multipleChoices.length; i++) {
        var element = multipleChoices[i];
    }
})

var setTimer = function(){
    timer.textContent = "Time: " + timeLeft;
    var timerInterval = setInterval(function(){
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;
        if (timeLeft ===0) {
            clearInterval(timerInterval);
            quizOver ();
        }
    },1000);

}