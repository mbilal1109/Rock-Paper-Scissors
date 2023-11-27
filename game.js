let playerCount = 0;
let computerCount = 0;

function getComputerChoice() {
  randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice == 0) {
    return "Rock";
  } else if (randomChoice == 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

// Plays a single round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  const resultBox = document.querySelector("#results");
  resultBox.textContent = `AI Selected: ${computerSelection}`;

  if (playerSelection == computerSelection) {
    console.log("Its a Tie!");
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      console.log("You Lose!, Paper beats Rock!");
      computerCount += 1;
    } else if (computerSelection == "scissor") {
      console.log("You Win!, Rock beats Scissor!");
      playerCount += 1;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      console.log("You Win!, Paper beats Rock!");
      playerCount += 1;
    } else if (computerSelection == "scissor") {
      console.log("You Lose!, Scissor beats Paper!");
      computerCount += 1;
    }
  } else {
    if (computerSelection == "rock") {
      console.log("You Lose!, Rock beats Scissor!");
      computerCount += 1;
    } else if (computerSelection == "paper") {
      console.log("You Win!, Scissor beats Paper!");
      playerCount += 1;
    }
  }
  console.log(playerCount)
  console.log(computerCount)
  if (playerCount == 5) {
    console.log("You Win!!!");
  } else if(computerCount == 5) {
    console.log("AI Wins!!!");
  }
  return;
}

function game() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      playRound(button.value, getComputerChoice());
    });
  });
}

game();
