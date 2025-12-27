const choices = ["rock", "paper", "scissor"];

let getHumanChoice = function () {
    let userChoice = prompt("What's it gonna be? Rock, Paper or Scissor").toLowerCase();

    if (choices.includes(userChoice)) {
        return userChoice;
    }
    return "Invalid Option Try Again";
};

let getComputerChoice = function () {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex];
    return computer;
};

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function getWinner() {
        if (humanScore > computerScore) {console.log("You Win The Game, Congratulations.");}

        else if (computerScore > humanScore) {console.log("You lose, Computer Won. Better Luck Next time.");}

        else {console.log("Its a Tie");}
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            humanScore = 0, computerScore = 0;
            return "Tie";
        }

        else if (
            (humanChoice === "rock" && computerChoice === "scissor") ||
            (humanChoice === "scissor" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore += 1, computerChoice += 0;
            return "player";
        }

        else {
            computerScore += 1, humanScore += 0;
            return "computer";
        }
    }

    for (let i = 1; i <= 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        
    } const results = getWinner(); console.log(results)

};

playGame()