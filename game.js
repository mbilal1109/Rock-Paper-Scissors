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
    if(playerSelection == computerSelection) {
        return 'Its a Tie!';
    }
    else if(playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You Win!, Rock beats Paper!';
    }
}

// console.log(singleGameRound('Rock', getComputerChoice()));