var multipleChoices = [
    {
        question: "Inside of which HTML element do we put JavaScript?",
        answers: ["<script>", "<link>", "<javascript>", "<a href>"],
        correctAnswer: 0,
    },
    {
        question: "Where do you insert JavaScript in HTML?",
        answers: ["In the <head>", "Top of the <body>", "Bottom of the <body>", "In the <header>"],
        correctAnswer: 2,
    },
    {
        question: "How do you start a for loop?",
        answers: ["for(i=0; i < length; i++)", "for(i=0; i++)", "for(var i=0, i <length, i++)", "for(var i=0; i < length; i++)"],
        correctAnswer: 3,
    },
    {
        question: "How do you state that x is strictly equal to y?",
        answers: ["x=y", "x!=y", "x==y", "x===y"],
        correctAnswer: 3,
    },
    {
        question: "Which one of these is an object?",
        answers: ["[a, b, c]", "{a:1, b:2, c:3}", "[{a:1}, b, c]", "(a:1, b:2, c:3)"],
        correctAnswer: 1,
    }
]

var startButton = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var startPage = document.querySelector("#startPage");
var timer = document.querySelector("#timer");
var ulEl = document.querySelector("#answers")
var results = document.querySelector("#result");
var timeLeft = 60;
var counter = 0;
var score = 0;
var targetQuestion = multipleChoices[counter];
var formField = document.querySelector("form");
var button = document.querySelector("#submit");
var input = document.querySelector("input");
var retake = document.querySelector("#retake");

formField.style.display = "none";
retake.style.display = "none";

if (!localStorage.getItem("user-submission")) {
    var stored = [];
} else {
    var stored = JSON.parse(localStorage.getItem("user-submission"));
}

startButton.addEventListener("click", function () {
    startPage.style.display = "none";
    setTimer();

    questionEl.textContent = targetQuestion.question;

    for (var i = 0; i < targetQuestion.answers.length; i++) {
        var answersEl = document.createElement("li");
        answersEl.textContent = targetQuestion.answers[i];
        ulEl.appendChild(answersEl);
    }
});

ulEl.addEventListener("click", function (event) {
    var selectedAnswer = event.target;
    console.log(selectedAnswer.textContent);
    if (selectedAnswer.textContent === targetQuestion.answers[targetQuestion.correctAnswer]) {
        results.textContent = "You are correct!";
        score++;
    } else {
        results.textContent = "Sorry, you are incorrect.";
        timeLeft -= 5;
    }
    nextQuestion();
});

var nextQuestion = function () {
    ulEl.innerHTML = "";
    counter++;
    targetQuestion = multipleChoices[counter];
    if (!targetQuestion) {
        timeLeft = 0;
        return;
    }
    questionEl.textContent = targetQuestion.question;

    for (var i = 0; i < targetQuestion.answers.length; i++) {
        var answersEl = document.createElement("li");
        answersEl.textContent = targetQuestion.answers[i];
        ulEl.appendChild(answersEl);
    }
}

var setTimer = function () {
    timer.textContent = "Time: " + timeLeft;
    var timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            timeLeft = 0;
            clearInterval(timerInterval);
            console.log("quizOver");
            quizOver();
        }
        timer.textContent = "Time: " + timeLeft;
    }, 1000);
}

var quizOver = function () {
    questionEl.innerHTML = "";
    results.innerHTML = "";

    var scoreDisplay = document.querySelector("#score");
    scoreDisplay.textContent = "Your final score is " + score + "."

    formField.style.display = "block";

}

button.addEventListener("click", function (event) {
    event.preventDefault();
    var userSubmission = input.value;
    var inputSubmission = {
        initials: userSubmission,
        score: score
    };
    stored.push(inputSubmission);

    localStorage.setItem("user-submission", JSON.stringify(stored));

    retake.style.display = "block";
});


retake.addEventListener("click", function () {
    location.reload();
});
