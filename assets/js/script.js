var multipleChoices = [
    {
    question: "question1",
    answers: ["a1", "a2", "a3", "a4"],
    correctAnswer: 0,
    },
    {
    question: "question2",
    answers: ["b1", "b2", "b3", "b4"],
    correctAnswer: 1,
    },
    {
    question: "question3",
    answers: ["c1", "c2", "c3", "c4"],
    correctAnswer: 2,
    },
    {
    question: "question4",
    answers: ["d1", "d2", "d3", "d4"],
    correctAnswer: 3,
    },
    {
    question: "question5",
    answers: ["e1", "e2", "e3", "e4"],
    correctAnswer: 0,
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

formField.style.display="none";
retake.style.display = "none";


startButton.addEventListener("click", function(){
    startPage.style.display = "none";
    setTimer ();
    
    questionEl.textContent = targetQuestion.question;
    
    for (var i = 0; i < targetQuestion.answers.length; i++){
        var answersEl = document.createElement("li");
        answersEl.textContent = targetQuestion.answers[i];
        ulEl.appendChild(answersEl);
        }
});

ulEl.addEventListener("click", function(event){
    var selectedAnswer = event.target;
    console.log(selectedAnswer.textContent);
    if(selectedAnswer.textContent===targetQuestion.answers[targetQuestion.correctAnswer]) {
        results.textContent = "You are correct!";
        score++;
    } else {
        results.textContent = "Sorry, you are incorrect.";
        timeLeft-=5;
    }
    nextQuestion(); 
});

var nextQuestion = function(){
    ulEl.innerHTML="";
    counter++;
    targetQuestion = multipleChoices[counter];
    if(!targetQuestion){
        timeLeft=0;
        return;
    }
    questionEl.textContent = targetQuestion.question;
    
    for (var i = 0; i < targetQuestion.answers.length; i++){
        var answersEl = document.createElement("li");
        answersEl.textContent = targetQuestion.answers[i];
        ulEl.appendChild(answersEl);
        }
}

var setTimer = function(){
    timer.textContent = "Time: " + timeLeft;
    var timerInterval = setInterval(function(){
        timeLeft--;
        if (timeLeft <=0) {
            timeLeft=0;
            clearInterval(timerInterval);
            console.log("quizOver");
            quizOver ();
        }
        timer.textContent = "Time: " + timeLeft;
    },1000);
}

var quizOver = function(){
    questionEl.innerHTML="";
    results.innerHTML="";

    var scoreDisplay = document.querySelector("#score");
    scoreDisplay.textContent = "Your final score is " + score + "."

    formField.style.display = "block";

}

button.addEventListener("click", function(event){
    event.preventDefault();
    var inputSubmission = input.value;

    
    localStorage.setItem("initials", inputSubmission);
    localStorage.setItem("score", score);

    var highScoresArray = [];
    var userInitials= localStorage.getItem("initials");
    var highScore = localStorage.getItem("score");
    var scoreInitials = {
        initials: userInitials,
        score: highScore
    }
    highScoresArray.push(scoreInitials);
    
    
    retake.style.display = "block";
});


retake.addEventListener("click", function(){
    location.reload();
});


/*var highScoresArray = [];

var userInitials= localStorage.getItem("initials");
var highScore = localStorage.getItem("score");

}*/