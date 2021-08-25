var userInitials = JSON.parse(localStorage.getItem("user-submission"));
var ulEl = document.querySelector("ul");
console.log(userInitials);

for (var i = 0; i < userInitials.length; i++){
    var scoreList = document.createElement("li");
    scoreList.textContent = userInitials[i];
    ulEl.appendChild(scoreList);
    }