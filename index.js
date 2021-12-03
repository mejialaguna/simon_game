var gamePattern = [];
var userClickedPattern = [];
const btnColor = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;


$(document).keypress(function () {
  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});




$(".btn").click(function () {
  const userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  // console.log(userClickedPattern);
  playSound(userChosenColor);
  animePress(userChosenColor);
   checkAnswer(userClickedPattern.length - 1);
});




function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
     if (userClickedPattern.length === gamePattern.length) {
       setTimeout(function() {
         nextSequence();
       }, 1000);
     }
  } else {
    console.log("wrong");
  }
}




function nextSequence() {
  //reset empty array for next level

 userClickedPattern = [];

  level++;  
  $("h1").text("Level " + level);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = btnColor[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}



function playSound(name) {
  new Audio(`sounds/${name}.mp3`).play();
}

function animePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

