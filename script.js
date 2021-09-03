

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


    
    if (computerSelectionCleaned === playerSelectionCleaned) {
        console.log("It's a draw! You both chose " + playerSelectionCleaned + "!");
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelectionCleaned === "paper") {
                    console.log(outcome[0] + winLose[0]);
                } else if (computerSelectionCleaned === "scissors") {
                    console.log(outcome[1] + winLose[1]);
                }
                break;
            case "paper":
                if (computerSelectionCleaned === "scissors") {
                    console.log(outcome[2] + winLose[0]);
                } else if (computerSelectionCleaned === "rock") {
                    console.log(outcome[0] + winLose[1]);
                }
                break;
            case "scissors":
                if (computerSelectionCleaned === "rock") {
                    console.log(outcome[1] + winLose[0]);
                } else if (computerSelectionCleaned === "paper") {
                    console.log(outcome[2] + winLose[1]);
                }
                break;
            default:
                console.log("Invalid Choice");
        }
    }

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));