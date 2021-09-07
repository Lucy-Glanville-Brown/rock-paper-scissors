const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.control')
const userImage = document.getElementById('player-image')
const computerImage = document.getElementById('computer-image')
let userChoice
let computerChoice
let result
const choices = ['rock', 'paper', 'scissors']

/**
 * Add event listener for all control buttons
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
   incrementScore()
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

 /**
  * Gets the current score from the DOM and increments it by 1
  */
 function incrementScore() {
    let playerScore = document.getElementById('player-score').innerText;    
    let computerScore = document.getElementById('computer-score').innerText;

    if (result === "You win!")
    document.getElementById('player-score').innerText = ++playerScore;

    if (result === "You lost!")
    document.getElementById('computer-score').innerText = ++computerScore;
 }

 // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("open");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/**
 * Timer to start/stop when user clicks on button
 */

const timer = document.getElementById('timer')
let timerInterval;

function startTimer() {
   clearInterval();
   let second = 0;
   let minute = 0;
   let hour = 0;

   timerInterval = setInterval(function() {
      timer.innerHTML = 
        (hour ? hour + ':' : '') +
        (minute < 10 ? '0' + minute : minute) +
        ':' +
        (second < 10 ? '0' + second : second);
        second++;
        if (second == 60) {
           minute++;
           second = 0;
        }
        if (minute == 60) {
           hour++;
           minute = 0;
        }
   }, 1000);
};

function stopTimer() {
   clearInterval(timerInterval)
}


