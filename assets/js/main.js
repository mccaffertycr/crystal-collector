// counter variables
var rndm = 0;
var wins = 0;
var losses = 0;
var score = 0;

function startGame() {
// generate and display random number
rndm = Math.floor(Math.random()*120)+19;
$("#rndm").text(rndm);
// create gem images with jquery and assign a value between 1 and 12
$("#gems").empty();
var red = $("<img src='assets/images/_red.jpg' class='gem' val=" + (Math.floor(Math.random()*12)+1) + ">");
var blue = $("<img src='assets/images/_blue.jpg' class='gem' val=" + (Math.floor(Math.random()*12)+1) + ">");
var green = $("<img src='assets/images/_green.jpg' class='gem' val=" + (Math.floor(Math.random()*12)+1) + ">");
var yellow = $("<img src='assets/images/_yel.jpg' class='gem' val=" + (Math.floor(Math.random()*12)+1) + ">");
// append the gems to the gems div
$("#gems").append(red, blue, green, yellow);
// display score
score = 0;
$("#score").text("Your total score is: " + score);
// display wins and losses
$("#win-loss").text("Wins: " + wins + " Losses: " + losses);
}

$(".gem").on("click", function() {
    score = score + $(this).val();
    $("#score").text("Your total score is: " + score);
    if (score === rndm) {
        wins++;
        scartGame();
    } else if (score > rndm) {
        losses++;
        startGame();
    }
});

$(document).ready(function() {
    startGame();
});
