function computerPlay() {
    choices = ["rock","paper","scissors"];
    min = Math.ceil(0);
    max = Math.floor(3);
    randInt = Math.floor(Math.random()*3);
    computerPick = choices[randInt];
    return computerPick;
}

function playerSelection() {
    let selection = window.prompt("Please enter either Rock, Paper, or Scissors.").toLowerCase();
    return selection;
}

function playRound() {
    let computerChoice = computerPlay();
    let playerChoice = playerSelection();

    // console.log("Computer picked: " + computerChoice);
    // console.log("Player picked: " + playerChoice);

    if (computerChoice == playerChoice) {
        return "It's a tie!";
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        return "Computer wins!"
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        return "Player wins!"
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        return "Computer wins!"
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        return "Player wins!"
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        return "Computer wins!"
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        return "Player wins!" 
    } else {
        return "Error occured"
    }
}

function game() {
    let computerScore = 0
    let playerScore = 0
    let ties = 0

    for (let i = 0; i<5; i++) {
        let game = playRound();
        console.log('The score is:\n' + "Computer: " + computerScore + '\n' + "Player: " + playerScore + '\n' + "Ties: " + ties);
        if (game == "Computer wins!") {
            computerScore+=1
        } else if (game == "Player wins!") {
            playerScore+=1
        } else {
            ties+=1
        }
    }

    if (computerScore==playerScore) {
        return "It's a tie."
    } else if (computerScore>playerScore) {
        return "The computer wins!"
    } else {
        return "The player wins!"
    }
}