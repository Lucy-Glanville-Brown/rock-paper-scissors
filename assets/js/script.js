const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const userImage = document.getElementById('player-image')
const computerImage = document.getElementById('computer-image')
let userChoice
let computerChoice
let result
const choices = ['rock', 'paper', 'scissors']

/**
 * Add event listener for all buttons
 */
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
   userChoice = event.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
   userImageDisplay()
   computerImageDisplay()
}))

/**
 * Generate the computer choice
 */
 function generateComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 3)
   console.log(randomNumber) //remove once tested
   if (randomNumber === 0) {
      computerChoice = 'rock'
   }
   if (randomNumber === 1) {
      computerChoice = 'paper'
   }
   if (randomNumber === 2) {
      computerChoice = 'scissors'
   }
   computerChoiceDisplay.innerHTML = computerChoice
}

/**
 * Generate and display the result 
 */

function getResult() {
   if (computerChoice === userChoice) {
      result = "It's a draw!"
   }
   if (computerChoice === 'rock' && userChoice === 'paper') {
      result = "You win!"
   }
   if (computerChoice === 'rock' && userChoice === 'scissors') {
      result = "You lost!"
   }
   if (computerChoice === 'paper' && userChoice === 'scissors') {
      result = "You win!"
   }
   if (computerChoice === 'paper' && userChoice === 'rock') {
      result = "You lost!"
   }
   if (computerChoice === 'scissors' && userChoice === 'rock') {
      result = "You win!"
   }
   if (computerChoice === 'scissors' && userChoice === 'paper') {
      result = "You lost!"
   }
   resultDisplay.innerHTML = result
}

/**
 * Generates the correct image based on player/computer choice
 */
 function userImageDisplay () {
   if (userChoice === 'rock')
     userImage.src = `assets/images/rock.png`;
     userImage.alt = 'rock';
 
   if (userChoice === 'paper')
     userImage.src = `assets/images/paper.png`;
     userImage.alt = 'paper';
  
   if (userChoice === 'scissors')
     userImage.src = `assets/images/scissors.png`;
     userImage.alt = 'scissors';
 }
 
 function computerImageDisplay () {
   if (computerChoice === 'rock')
     computerImage.src = `assets/images/rock.png`;
     computerImage.alt = 'rock';
 
   if (computerChoice === 'paper')
     computerImage.src = `assets/images/paper.png`;
     computerImage.alt = 'paper';
  
   if (computerChoice === 'scissors')
     computerImage.src = `assets/images/scissors.png`;
     computerImage.alt = 'scissors';
 }