const gamePattern = [];
const userClickedPattern = [];
const btnColor = ["red", "blue", "green", "yellow"];

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = btnColor[randomNumber];
  gamePattern.push(randomChosenColor);
  //   console.log(randomNumber, randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  new Audio(`sounds/${randomChosenColor}.mp3`).play();
}
function handler() {
  $(".btn").click(function () {
    nextSequence();
    const userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern)
});
}
handler();

// $(document).keypress(function () {
//   $("h1").text("Level");
// });
