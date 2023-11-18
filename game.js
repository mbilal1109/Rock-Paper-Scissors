function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice == 0) {
        return 'Rock';
    }
    else if(randomChoice == 1) {
        return 'Paper';
    }
    else {
        return 'Scissor';
    }
}

// Plays a single round of the game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(`Computer Picked: ${computerSelection}`);
    
    if(playerSelection == computerSelection) {
        console.log('Its a Tie!');
        return;
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('You Lose!, Paper beats Rock!');
        return;
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log('You Win!, Rock beats Scissor!');
        return;
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You Win!, Paper beats Rock!');
        return;
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissor') {
        console.log('You Lose!, Scissor beats Paper!');
        return;
    }
    else if(playerSelection == 'scissor' && computerSelection == 'rock') {
        console.log('You Lose!, Rock beats Scissor!');
        return;
    }
    else if(playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log('You Win!, Scissor beats Paper!');
        return;
    }
}

function game() {
    let selection = prompt('Select 1 Option: Rock, Paper, or Scissor');
    for (let i = 1; i <= 5; i++) {
        console.log('Round: ' + i);
        playRound(selection, getComputerChoice());
    }
    return "Game Finished!";
}

console.log(game());