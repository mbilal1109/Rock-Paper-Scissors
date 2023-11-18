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
function singleGameRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection == computerSelection) {
        return 'Its a Tie!';
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper') {
        console.log(`Computer Picked: ${computerSelection}`)
        return 'You Lose!, Paper beats Rock!';
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log(`Computer Picked: ${computerSelection}`)
        return 'You Win!, Rock beats Scissor!';
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`Computer Picked: ${computerSelection}`)
        return 'You Win!, Paper beats Rock!';
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissor') {
        console.log(`Computer Picked: ${computerSelection}`)
        return 'You Lose!, Scissor beats Paper!';
    }
    else if(playerSelection == 'scissor' && computerSelection == 'rock') {
        console.log(`Computer Picked: ${computerSelection}`)
        return 'You Lose!, Rock beats Scissor!';
    }
    else if(playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log(`Computer Picked: ${computerSelection}`)
        return 'You Win!, Scissor beats Paper!';
    }
}

console.log(singleGameRound('Rock', getComputerChoice()));