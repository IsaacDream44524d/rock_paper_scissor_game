const hands = document.querySelectorAll('.hand');
let humanChoiceBox = document.querySelector('.choice-box')

function play() {
    hands.forEach(hand => {
        hand.addEventListener('click', (e) => {
            let playerChoice = hand.dataset.choice;
            let renderChoice = hand.cloneNode(true)
            renderChoice.classList.add('option')
            humanChoiceBox.innerHTML = '';
            humanChoiceBox.appendChild(renderChoice)
            //console.log(playerChoice)
        })
    })
}

let getComputerChoice = function (event, hand) {
    const choices = ["rock", "paper", "scissor"]
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex];
    
};

play()

