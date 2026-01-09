const hands = document.querySelectorAll('.hand');
let humanChoiceBox = document.querySelector('.choice-box');
let computerhands = document.querySelectorAll('.computer-hand');
let displayChoiceWon = document.querySelector('.display-choice')
let humanScore = document.querySelector('.human-score');
let robotScore = document.querySelector('.computer-score');
let modal = document.querySelector('#modal');
let modalPlayerScore = document.querySelector('.player-score');
let modalComputerScore = document.querySelector('.computer-score');
let wintext = document.querySelector('.ok');
let modalPlayAgain = document.querySelectorAll('.play')

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
      displayChoiceWon.innerHTML = ''
      displayChoiceWon.textContent = choiceWon;
      //this get the winner, first to reach 5 points and display on modal
      getwinner(playerScore, computerScore)
      // resets the game upon user request
      resetGame(playerScore, computerScore)
    })
  })
}

let playerScore = 0;
let computerScore = 0;

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

function getwinner(firstScore, secondScore) {
  if (firstScore === 5) {
    modalPlayerScore.innerHTML = '';
    modalPlayerScore.textContent = firstScore;
    modalComputerScore.textContent = secondScore;
    modal.style.display = 'flex';
  }

  else if (secondScore === 5) {
    computerScore.innerHTML = '';
    modalComputerScore.textContent = secondScore
    modalPlayerScore.textContent = firstScore;
    wintext.textContent = 'You Lose'
    modal.style.display = 'flex';
  }
  firstScore = 0;
  secondScore = 0;
}
setTimeout(getwinner, 10000);

function resetGame(pScore, cScore) {
  modalPlayAgain.forEach(item => {
    item.addEventListener('click', () => {
      robotScore.textContent = 0;
      humanScore.textContent = 0;
      modal.style.display = 'none'
    })
  })
}

// THINGS NEED FIXING
// 1. The reset function is not working, i need to hard core change the scores to zero.
// 2. When player wins, the computer score is remains five as in the div.


play()


