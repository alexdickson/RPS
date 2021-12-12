/* Set scores to 0 before game starts */
let computerScore = 0;
let playerScore = 0;

/* Function for computer choice: set var choice as array of choices, set var randomChoice as random choice over length of that array. Return the choice and set to lowercase.*/
function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"]
    let randomChoice = choice[Math.floor(Math.random() * choice.length)]
    return randomChoice.toLowerCase();
}

/* Function for round: set var computerSelection to above function, set var playerSelection to prompt (and convert to lowercase). Switch statement comparing each possible choice, including a tie. Increment playerScore or computerScore accordingly. If either score is at least 5, provide alert of winner. */
function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Make your choice.").toLowerCase();

    switch (true) {
        case (computerSelection == playerSelection):
            alert('It\'s a tie - play again.')
            break;
        case (computerSelection === 'rock' && playerSelection === 'paper'):
            alert('You win! Paper beats rock.')
            playerScore += 1;
            break;
        case (computerSelection === 'rock' && playerSelection === 'scissors'):
            alert('You lose! Rock beats scissors.')
            computerScore += 1;
            break;
        case (computerSelection === 'paper' && playerSelection === 'scissors'):
            alert('You win! Scissors beats paper.')
            playerScore += 1;
            break;
        case (computerSelection === 'paper' && playerSelection === 'rock'):
            alert('You lose! Paper beats rock.')
            computerScore += 1;
            break;
        case (computerSelection === 'scissors' && playerSelection === 'rock'):
            alert('You win! Rock beats scissors.')
            playerScore += 1;
            break;
        case (computerSelection === 'scissors' && playerSelection === 'paper'):
            alert('You lose! Scissors beats paper.')
            computerScore += 1;
            break;
    }

    if (computerScore >= 5) {
        alert('You lost! Computer wins.');
    } else if (playerScore >= 5) {
        alert('You won! Computer loses.')
    }
}

/* Function for game: loop playRound until playerScore or computerScore reaches 5. */
function game() {
    for (i = 1; playerScore < 5 & computerScore < 5; i++) {
        playRound();
    }
}
/* Play game */
game();
