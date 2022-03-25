function computerPlay() {
    choices = ["rock","paper","scissors"];
    min = Math.ceil(0);
    max = Math.floor(3);
    randInt = Math.floor(Math.random()*3);
    computerPick = choices[randInt];
    return computerPick;
}

function playRound(playerChoice) {
    let computerChoice = computerPlay();

    console.log("Computer picked: " + computerChoice);
    console.log("Player picked: " + playerChoice);
    if (gamesPlayed<5) {
        if (computerChoice == playerChoice) {
            ties+=1
            return "It's a tie!";
        } else if (computerChoice == "rock" && playerChoice == "scissors") {
            computerScore+=1
            gamesPlayed+=1
            return "Computer wins!"
        } else if (computerChoice == "rock" && playerChoice == "paper") {
            playerScore+=1
            gamesPlayed+=1
            return "Player wins!"
        } else if (computerChoice == "scissors" && playerChoice == "paper") {
            computerScore+=1
            gamesPlayed+=1
            return "Computer wins!"
        } else if (computerChoice == "scissors" && playerChoice == "rock") {
            playerScore+=1
            gamesPlayed+=1
            return "Player wins!"
        } else if (computerChoice == "paper" && playerChoice == "rock") {
            computerScore+=1
            gamesPlayed+=1
            return "Computer wins!"
        } else if (computerChoice == "paper" && playerChoice == "scissors") {
            playerScore+=1
            gamesPlayed+=1
            return "Player wins!" 
        } else {
            return "Error occured"
        }
    } else {
        if (playerScore>computerScore) {
            window.alert("The Player has won!");
        } else if (playerScore<computerScore) {
            window.alert("The computer has won!");
        }
    }
}


const visualPlayerScore = document.createElement("div");
const visualComputerScore = document.createElement("div");
const visualTies = document.createElement("div");

let gamesPlayed = 0;
let computerScore = 0;
let playerScore = 0;
let ties = 0;

visualPlayerScore.textContent = "Player score: " + playerScore.toString();
visualComputerScore.textContent = "Computer score: " + computerScore.toString();
visualTies.textContent = "Number of ties: " + ties.toString();

document.body.appendChild(visualComputerScore)
document.body.appendChild(visualPlayerScore)
document.body.appendChild(visualTies)


const rockBtn = document.createElement("button");
rockBtn.innerHTML = "Rock";
rockBtn.addEventListener("click", function userClick() {
    let game = playRound("rock");
    visualPlayerScore.textContent = "Player score: " + playerScore.toString();
    visualComputerScore.textContent = "Computer score: " + computerScore.toString();
    visualTies.textContent = "Number of ties: " + ties.toString();  
});
document.body.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.innerHTML = "Paper";
paperBtn.addEventListener("click", function userClick() {
    let game = playRound("paper");
    visualPlayerScore.textContent = "Player score: " + playerScore.toString();
    visualComputerScore.textContent = "Computer score: " + computerScore.toString();
    visualTies.textContent = "Number of ties: " + ties.toString();
});
document.body.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.innerHTML = "Scissors";
scissorsBtn.addEventListener("click", function userClick() {
    let game = playRound("scissors");
    visualPlayerScore.textContent = "Player score: " + playerScore.toString();
    visualComputerScore.textContent = "Computer score: " + computerScore.toString();
    visualTies.textContent = "Number of ties: " + ties.toString();
});
document.body.appendChild(scissorsBtn);


// function game() {
//     let computerScore = 0
//     let playerScore = 0
//     let ties = 0

//     for (let i = 0; i<5; i++) {
//         let game = playRound();
//         console.log('The score is:\n' + "Computer: " + computerScore + '\n' + "Player: " + playerScore + '\n' + "Ties: " + ties);
        // if (game == "Computer wins!") {
        //     computerScore+=1
        // } else if (game == "Player wins!") {
        //     playerScore+=1
        // } else {
        //     ties+=1
        // }
//     }

//     if (computerScore==playerScore) {
//         return "It's a tie."
//     } else if (computerScore>playerScore) {
//         return "The computer wins!"
//     } else {
//         return "The player wins!"
//     }
// }