gamePattern= []

function nextSequence() {
    const btnColor = ["red", "blue", "green", "yellow"];
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = btnColor[randomNumber];
    gamePattern.push(randomChosenColor)
    console.log(randomNumber, btnColor[randomNumber]);
}

$(document).keypress(function () {
  $("h1").text("Level");
});
