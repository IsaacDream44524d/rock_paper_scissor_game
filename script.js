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
    const computerChoice = choices[randomIndex];
};

