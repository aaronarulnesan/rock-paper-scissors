

function computerPlay() {
    // Array of plays (rock, paper, or scissors) for computer to randomly choose from
    let plays = ["Rock", "Paper", "Scissors"];

    //Random number between 0 to 2
    let randomNumber = Math.floor(Math.random() * 3);

    //returns random choice of either rock, paper, or scissors
    return plays[randomNumber];

}



function playRound(playerSelection, computerSelection) {

    //converting selection of the player and computer choices to lower case
    let playerSelectionCleaned = playerSelection.toLowerCase();
    let computerSelectionCleaned = computerSelection.toLowerCase();

    //Outcome messages stored in arrays to save time repeating messages
    const outcome = ["Paper beats Rock!", "Rock beats Scissors!", "Scissors beats Paper!"];
    const winLose = [" You lose!", " You win!"];
    
    //main logic of each round
    //if player and computer choose the same choice, the result is a draw
    if (computerSelectionCleaned === playerSelectionCleaned) {
        alert("It's a draw! You both chose " + playerSelectionCleaned + "!");
        return DRAW;
    } 
    // else the player's choice is compared with the computer's choice and the winner is determined
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelectionCleaned === "paper") {
                    alert(outcome[0] + winLose[0]);
                    return LOSE;
                } else if (computerSelectionCleaned === "scissors") {
                    alert(outcome[1] + winLose[1]);
                    return WIN;
                }
                break;
            case "paper":
                if (computerSelectionCleaned === "scissors") {
                    alert(outcome[2] + winLose[0]);
                    return LOSE;
                } else if (computerSelectionCleaned === "rock") {
                    alert(outcome[0] + winLose[1]);
                    return WIN;
                }
                break;
            case "scissors":
                if (computerSelectionCleaned === "rock") {
                    alert(outcome[1] + winLose[0]);
                    return LOSE;
                } else if (computerSelectionCleaned === "paper") {
                    alert(outcome[2] + winLose[1]);
                    return WIN;

                }
                break;
            default:
                alert("Invalid Choice");
                return DRAW;
        }
    }

}

//function for running a 5 round match
function game() {

    let matchResult = 0;
    let playerSelection = '';
    let outcomeMessage = '';


    alert("Rock, Paper, Scissors!\n5 rounds total! Begin!");

    //Loop which runs a round each iteration and tallies the resulting score
    for(let i = 1; i <= 5; i++) {
        playerSelection = prompt("Round " + i + "!" 
        + "\nPlayer Score: " + playerScore 
        + "\nComputer Score: " + computerScore
        + "\nRock, paper, or scissors?");
        matchResult = playRound(playerSelection, computerPlay());
        if(matchResult === WIN ) {
            playerScore++;
        } else if (matchResult === LOSE) {
            computerScore++;
        }
    }
    //Determining the final outcome message
    if(playerScore>computerScore) {
        outcomeMessage = '\nYou Win!';
    } else {
        outcomeMessage = '\nYou Lose!';
    }

    //Final outcome message
    alert("Final Scores: " 
    + "\nPlayer: " + playerScore
    + "\nComputer: " + computerScore
    + outcomeMessage);

}

//global variables
let playerScore = 0;
let computerScore = 0;
const WIN = 1;
const LOSE = -1;
const DRAW = 0;

//Running the game
game();