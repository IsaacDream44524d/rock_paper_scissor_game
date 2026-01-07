const hands = document.querySelectorAll('.hand');
let humanChoiceBox = document.querySelector('.choice-box');
let computerhands = document.querySelectorAll('.computer-hand');
let displayChoiceWon = document.querySelector('.display-choice')
let humanScore = document.querySelector('.human-score');
let robotScore = document.querySelector('.computer-score');

function play() {
  hands.forEach(hand => {
    hand.addEventListener('click', (e) => {
      // this get the player choice, add style to it.
      let playerChoice = hand.dataset.choice;
      let renderChoice = hand.cloneNode(true);
      renderChoice.classList.add('option');
      // rewrites the current img with new one
      humanChoiceBox.innerHTML = '';
      humanChoiceBox.appendChild(renderChoice);
      // this get the computer random choice
      let computerChoice = getComputerChoice();
      renderComputerChoice(computerChoice);
      //this gets the winner choice and displays it
      let choiceWon = getWinnerChoice(playerChoice, computerChoice);
      console.log(choiceWon)
      displayChoiceWon.innerHTML = ''
      displayChoiceWon.textContent = choiceWon;
    })
  })
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computer = choices[randomIndex];
  return computer;
}

function renderComputerChoice(choice) {
  computerhands.forEach(hand => {
    if (hand.dataset.option === choice) {
      hand.style.display = 'block';
    } else {
      hand.style.display = 'none';
    }
  })
}

let playerScore = 0;
let computerScore = 0;

function getWinnerChoice(player, computer) {
  if (player) {
    if (player === computer) {
      return "Tie";
    }

    else if (
      (player === "rock" && computer === "scissor") ||
      (player === "scissor" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      playerScore += 1;
      humanScore.textContent = playerScore;
      return "player";
    }

    else {
      computerScore += 1;
      robotScore.textContent = computerScore;
      return "computer";
    }
  }
}

play()

