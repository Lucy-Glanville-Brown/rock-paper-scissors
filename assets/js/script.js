const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

/**
 * Add event listener for all buttons
 */
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
   userChoice = event.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
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
