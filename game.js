let playerCount = 0;
let computerCount = 0;
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice == 0) {
    return "rock";
  } else if (randomChoice == 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

// Plays a single round of the game
function playRound(playerSelection, computerSelection) {
  let tempPhrase = '';

  if (playerSelection == computerSelection) {
    tempPhrase = "Its a Tie!";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      tempPhrase = "You Lose!, Paper beats Rock!";
      computerCount++;
    } else if (computerSelection == "scissor") {
      tempPhrase = "You Win!, Rock beats Scissor!";
      playerCount++;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      tempPhrase = "You Win!, Paper beats Rock!";
      playerCount++;
    } else if (computerSelection == "scissor") {
      tempPhrase = "You Lose!, Scissor beats Paper!";
      computerCount++;
    }
  } else {
    if (computerSelection == "rock") {
      tempPhrase = "You Lose!, Rock beats Scissor!";
      computerCount++;
    } else if (computerSelection == "paper") {
      tempPhrase = "You Win!, Scissor beats Paper!";
      playerCount++;
    }
  }

  if (playerCount == 5) {
    tempPhrase += "<p>You Win!!!</p>";
  } else if (computerCount == 5) {
    tempPhrase += "<p>Computer Wins!!!</p>";
  }

  document.getElementById('results').innerHTML = `<p> ${tempPhrase} </p>`;
  document.getElementById('scores').innerHTML = `Player: ${playerCount} <br> Computer: ${computerCount}`;
  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value, getComputerChoice());
  });
});
