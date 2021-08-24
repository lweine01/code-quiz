var highScoresElement = document.querySelector("#highScore");
var highScoresArray = [];

var userInitials= localStorage.getItem("initials");
var highScore = localStorage.getItem("score");

var scoreInitials = {
    initials: userInitials,
    score: highScore
}

highScoresArray.push(scoreInitials);


for (var i = 0; i < highScoresArray.length; i++){
    var scoreList = document.createElement("li");
    answersEl.textContent = targetQuestion.answers[i];
    ulEl.appendChild(answersEl);
    }