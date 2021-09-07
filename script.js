// GAME LOGIC

let playerScore = 0;
let computerScore = 0;
let rounds = 1;
let roundOutcome = '';
let matchOutcome = '';

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundOutcome = 'tie';
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
        playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ||
        playerSelection === 'PAPER' && computerSelection === 'ROCK'
    ) {
        playerScore++;
        roundOutcome = 'win';
    } else {
        computerScore++;
        roundOutcome = 'loss';
    }
}

function computerPlay() {
    // Array of plays (rock, paper, or scissors) for computer to randomly choose from
    let plays = ['ROCK', 'PAPER', 'SCISSORS'];

    //Random number between 0 to 2
    let randomNumber = Math.floor(Math.random() * 3);

    //returns random choice of either rock, paper, or scissors
    return plays[randomNumber];

}

function updateMatchOutcome() {
    if (playerScore === computerScore) {
        matchOutcome = 'its a tie match';
    } else if (playerScore > computerScore) {
        matchOutcome = 'you won the match';
    } else {
        matchOutcome = 'you lost the match';
    }
    updateFinalResults();
}

function game(playerSelection) {
    if (rounds >= 5) {
        updateMatchOutcome();
        return
    } else {
        playRound(playerSelection, computerPlay());
        rounds++;
        updateScore();
    }
}

function replay() {
    playerScore = 0;
    computerScore = 0;
    rounds = 1;
    score.innerText = 'Rock, Paper, Scissors! 5 Rounds! Round 1 Begin!';
}

// USER INTERFACE

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const replayBtn = document.getElementById('replayBtn');
const score = document.getElementById('score');


rockBtn.addEventListener('click', () => game('ROCK'));
paperBtn.addEventListener('click', () => game('PAPER'));
scissorsBtn.addEventListener('click', () => game('SCISSORS'));

replayBtn.addEventListener('click', () => replay());

function updateScore() {
    score.innerText = `Last round results: ${roundOutcome}
        \nRound  ${rounds}!
        \nPlayer Score:  ${playerScore}
        \nComputer Score: ${computerScore}
        \nRock, paper, or scissors?`;
}

function updateFinalResults() {
    score.innerText = `${matchOutcome}!
        \nPlayer Score:  ${playerScore}
        \nComputer Score: ${computerScore}`;
}