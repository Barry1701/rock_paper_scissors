/** 
Declare constants for DOM elements
and possible choices*/
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/** 
Add Event Listeners to all the buttons*/

for (let button of buttons) {
  button.addEventListener("click", function () {
    let playerChoice = this.getAttribute("data-choice");
    playGame(playerChoice);
  });
}

/** The main game function. Accept one parameter, 
which is the data-choice value of the selected button*/
function playGame(playerChoice) {
  playerImage.src = `assets/images/${choices[playerChoice]}.png`;
  playerImage.alt = choices[playerChoice];

  let computerChoice = Math.floor(Math.random() * 3);

  computerImage.src = `assets/images/${choices[computerChoice]}.png`;
  computerImage.alt = choices[computerChoice];

  let result = checkWinner(choices[computerChoice], choices[playerChoice]);

  updateScores(result);
}
/** 
Check to see who the winner is.
Determine the winner based on computer's and payer's choice */

function checkWinner(computerChoice, playerChoice) {
    if(computerChoice === playerChoice){
        return "tie";
    }else if(
    (computerChoice === "rock" && playerChoice === "scissors")||
    (computerChoice === "paper" && playerChoice === "rock")||
    (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        return "computer";
    }else{
        return "player";
    }
}
/**
 * Add updateScores to update socre based on a result.
 */

function updateScores (result) {
    if(result === "player") {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        messages.textContent = "You Win!";
    }else if(result === "computer") {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        messages.textContent = "Computer Wins!";
    }else{
        messages.textContent = "It is a Tie!"
    }
}
