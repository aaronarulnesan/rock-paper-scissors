//global variables
let playerScore = 0;
let computerScore = 0;
let rounds = 1;
const WIN = 1;
const LOSE = -1;
const DRAW = 0;


function computerPlay() {
    // Array of plays (rock, paper, or scissors) for computer to randomly choose from
    let plays = ["Rock", "Paper", "Scissors"];

    //Random number between 0 to 2
    let randomNumber = Math.floor(Math.random() * 3);

    //returns random choice of either rock, paper, or scissors
    return plays[randomNumber];

}

function buttonSelection(button) {

    switch (button.id) {
        case 'rockPlay':
            return 'rock';
            break;
        case 'paperPlay':
            return 'paper';
            break;
        case 'scissorsPlay':
            return 'scissors';
            break;
        default:
            return 'ERROR'
    }

}


function playRound(playerSelection, computerSelection) {

    const results = document.querySelector('#results');

    //converting selection of the player and computer choices to lower case
    let playerSelectionCleaned = playerSelection.toLowerCase();
    let computerSelectionCleaned = computerSelection.toLowerCase();

    //Outcome messages stored in arrays to save time repeating messages
    const outcome = ["Paper beats Rock!", "Rock beats Scissors!", "Scissors beats Paper!"];
    const winLose = [" You lose!", " You win!"];

    //main logic of each round
    //if player and computer choose the same choice, the result is a draw
    if (computerSelectionCleaned === playerSelectionCleaned) {
        results.innerText = `It's a draw! You both chose ${playerSelectionCleaned}!`;
        return DRAW;
    }
    // else the player's choice is compared with the computer's choice and the winner is determined
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelectionCleaned === "paper") {
                    results.innerText = `${outcome[0] + winLose[0]}`;
                    return LOSE;
                } else if (computerSelectionCleaned === "scissors") {
                    results.innerText = `${outcome[1] + winLose[1]}`;
                    return WIN;
                }
                break;
            case "paper":
                if (computerSelectionCleaned === "scissors") {
                    results.innerText = `${outcome[2] + winLose[0]}`;
                    return LOSE;
                } else if (computerSelectionCleaned === "rock") {
                    results.innerText = `${outcome[0] + winLose[1]}`;
                    return WIN;
                }
                break;
            case "scissors":
                if (computerSelectionCleaned === "rock") {
                    results.innerText = `${outcome[1] + winLose[0]}`;
                    return LOSE;
                } else if (computerSelectionCleaned === "paper") {
                    results.innerText = `${outcome[2] + winLose[1]}`;
                    return WIN;

                }
                break;
            default:
                results.innerText = `Invalid Choice`;
                console.log("Invalid Choice");
                return DRAW;
        }
    }

}


function game(playerSelection) {

    let matchResult = 0;
    let outcomeMessage = '';
    const score = document.querySelector('#score');
    const replay = document.querySelector('#replay');
    const results = document.querySelector('#results');
    const playerChoices = document.querySelector('#playerChoices');


    console.log("Rock, Paper, Scissors!\n5 rounds total! Begin!");

    if (rounds <= 5) {
        score.innerText = `Round  ${rounds}!
        \nPlayer Score:  ${playerScore}
        \nComputer Score: ${computerScore}
        \nRock, paper, or scissors?`

        console.log("Round " + rounds + "!" +
            "\nPlayer Score: " + playerScore +
            "\nComputer Score: " + computerScore +
            "\nRock, paper, or scissors?");
        matchResult = playRound(playerSelection, computerPlay());
        if (matchResult === WIN) {
            playerScore++;
        } else if (matchResult === LOSE) {
            computerScore++;
        } 
        rounds++;
    } else {
        if (playerScore > computerScore) {
            outcomeMessage = 'You Win!';
        } else {
            outcomeMessage = 'You Lose!';
        }

        results.classList.toggle('block');

        //Final outcome message
        score.innerText =
            `\nPlayer Score:  ${playerScore}
        \nComputer Score: ${computerScore}
        \n${outcomeMessage}`;

        replay.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            rounds = 1;
            results.classList.toggle('block');
            score.innerText = '';
            results.innerText = '';   
        });

    }

    //Determining the final outcome message

}


const playerChoices = document.querySelector('#playerChoices');
const choiceBtns = playerChoices.querySelectorAll('button');
let playerChoice = '';


choiceBtns.forEach((button) => {
    button.addEventListener('click', () => {
        game(buttonSelection(button));
        
    });
});