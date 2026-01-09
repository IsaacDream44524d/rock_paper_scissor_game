const hands = document.querySelectorAll('.hand');
let humanChoiceBox = document.querySelector('.choice-box');
let computerhands = document.querySelectorAll('.computer-hand');
let displayChoiceWon = document.querySelector('.display-choice')
let humanScore = document.querySelector('.human-score');
let robotScore = document.querySelector('.computer-score');
let modal = document.querySelector('#modal');
let modalPlayerScore = document.querySelector('.player-score');
let modalComputerScore = document.querySelector('#computer-score');
let wintext = document.querySelector('.ok');
let modalPlayAgain = document.querySelectorAll('.play')

let playerScore = 0;
let computerScore = 0;

// Attach click listeners to every player image
hands.forEach(hand => {
  hand.addEventListener('click', () => play(hand));
});

// Reset buttons for the modal
modalPlayAgain.forEach(item => {
  item.addEventListener('click', resetGame);
});

function play(hand) {
  // Get player choice
  let playerChoice = hand.dataset.choice;
  let renderChoice = hand.cloneNode(true);
  renderChoice.classList.add('option');

  // Update players choice display
  humanChoiceBox.innerHTML = '';
  humanChoiceBox.appendChild(renderChoice);

  // Generate computer choice and calling the render effect
  let computerChoice = getComputerChoice();
  renderComputerChoice(computerChoice);

  // Determine round winner
  let roundWinner = getRoundWinner(playerChoice, computerChoice);
  displayChoiceWon.textContent = roundWinner;

  // Update score based on winner
  updateScore(roundWinner);

  // Check if someone reached 5 point to end game
  getwinner();
}

// Generate computer random choice using random indexing
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Rendering computers choice with image
function renderComputerChoice(choice) {
  computerhands.forEach(hand => {
    hand.style.display = (hand.dataset.option === choice) ? 'block' : 'none';
  });
}

// Determine round winner
function getRoundWinner(player, computer) {
  if (player === computer) return "Tie";

  if (
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "player";
  }

  return "computer";
}

// Update scores
function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
    humanScore.textContent = playerScore;
  } else if (winner === "computer") {
    computerScore++;
    robotScore.textContent = computerScore;
  }
  // for tie do nothing
}

// Check if someone reached 5 points
function getwinner() {
  if (playerScore === 5) {
    modalPlayerScore.textContent = playerScore;
    modalComputerScore.textContent = computerScore;
    modal.style.display = 'flex';
    wintext.textContent = 'You Win';
  } else if (computerScore === 5) {
    modalPlayerScore.textContent = playerScore;
    modalComputerScore.textContent = computerScore;
    modal.style.display = 'flex';
    wintext.textContent = 'You Lose';
  }
}

// Reset game
function resetGame() {
  playerScore = 0;
  computerScore = 0;

  humanScore.textContent = 0;
  robotScore.textContent = 0;

  modal.style.display = 'none';
}



// FIX the compueter score on the modal, its not displaying