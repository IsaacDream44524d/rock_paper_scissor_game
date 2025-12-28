const choices = ["rock", "paper", "scissor"];

let getHumanChoice = function () {
    let userChoice = prompt("What's it gonna be? Rock, Paper or Scissor").toLowerCase();

    if (choices.includes(userChoice)) {
        return userChoice;
    }
    
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

        console.log(`Player score: ${humanScore}`);
        console.log(`computer score: ${computerScore}`);

        if (humanScore > computerScore) { console.log("You Win The Game, Congratulations."); }

        else if (computerScore > humanScore) { console.log("You lose, Computer Won. Better Luck Next time."); }

        else { console.log("Its a Tie"); }
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice) {
            if (humanChoice === computerChoice) {
                return "Tie";
            }

            else if (
                (humanChoice === "rock" && computerChoice === "scissor") ||
                (humanChoice === "scissor" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "rock")
            ) {
                humanScore++;
                return "player";
            }

            else {
                computerScore++;
                return "computer";
            }
        } 
    }

    let roundPlayed = 0;
    while (roundPlayed < 5) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (playerSelection) {
            console.log(playRound(playerSelection, computerSelection));
            roundPlayed ++;

        } else {console.log("Invalid Option Try Again");}

    } getWinner();
};

playGame()