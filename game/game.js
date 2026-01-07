const hands = document.querySelectorAll('.hand');
let humanChoiceBox = document.querySelector('.choice-box');
let computerhands = document.querySelectorAll('.computer-hand');

function play() {
    hands.forEach(hand => {
        hand.addEventListener('click', (e) => {
            // this get the player choice, add style to it.
            let playerChoice = hand.dataset.choice;
            let renderChoice = hand.cloneNode(true)
            renderChoice.classList.add('option')
            // rewrites the current img with new one
            humanChoiceBox.innerHTML = '';
            humanChoiceBox.appendChild(renderChoice)
            // this get the computer random choice
            let computerChoice = getComputerChoice();
            renderComputerChoice(computerChoice);
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

play()

