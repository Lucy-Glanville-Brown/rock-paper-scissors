# Rock Paper Scissors
## Portfolio Project 2: Rock, Paper, Scissors Game – Code Institute
Rock Paper Scissors is a game which I think most people would have played at some point in their lives. It’s a simple game which can help family, friends and colleagues make decisions.
The target audience would be people of all ages that want to play a quick game.

![Am i responsive](https://user-images.githubusercontent.com/85178695/132874378-571f1939-e772-4d69-8bd6-3bf5a39cbcbd.png)


## UX
### User Stories
As a user I would expect to see information on how to play the game and for the choices made to be shown for the user and computer along with the result.

### Strategy
My goal in the design was to include minimalist but useful information with eye catching images. This website is aimed to attract all demographics with an interest in playing a quick simple game.

### Scope
For the users I wanted to provide them with instructions on how to play the game with images to show the options. The game has responsive design so should function correctly across various devices such as, Mobiles, Tablet, Laptop and Desktop.

### Structure
I wanted the game to be eye catching and fun with instructions of how to play the game. 

### Skeleton

### Surface
#### Images
The main rock paper scissors (rps) image was found on https://www.vecteezy.com/ and I cropped the image down to get the indivdual images for rock, paper and scissors. 

I also used an image resizer to get the images to the same size. https://resizeimage.net/
#### Colours
The colors chosen were from the main rock paper scissors (rps) image using Adobe Color Extract Theme

Once the colors were chosen I used a contrast checker to decide on the text color https://contrast-grid.eightshapes.com 
#### Typography
I decided to use “Lato” and “San-serif” for the main body text with “Lobster” and “Sans-Serif” for the headings. These were found by exploring Google Fonts.

## Technologies
### Languages
1.	HTML
2.	CSS
3.	JavaScript
### Libraries
•	Google Fonts – Lobster, Lato and Sans-serif fonts

•	Font Awesome – used for icons throughout the website

•	Balsamiq – used for the creation of the wireframes

## Features
### Header
•	Featured at the top of the page shows the game name: Rock Paper Scissors in a font that is playful and clearly contrasts with the background.
### Game Results
•	When the user clicks an option, the image relating to their choice is shown on their side of the game board.

•	The JavaScript code chooses a random option for the computer player, displays the image relating to the computer’s choice, and then determine who the winner is.

•	The winner is announced to the user under the control buttons, and the score is updated for either the user or the computer depending on who won.

•	The results and score are clear to the user, making the game easy to play, understand who won, and what the score is.
### Start timer – button

### Reset scores - button

### How to Play - button with Modal
•	Instructions on how to play the game

•	Rules for how to win the game

•	How quickly can you beat the computer explains that you can use the timer option if you want to see how quickly you can win.

## Future Enhancements
•	Game Modes - options to select how many rounds you would like to play like best of 5 rounds

•	Difficulty - options to select the difficulty levels

•	Multiplayer - option to play against another user or to invite someone to play with you


## Testing
I have tested this game in Google Chrome, Mozilla Firefox, Safari and Microsoft Edge, as well as on my Apple iPhone SE and Huawei tablet(android.)

### Bugs
•	When you click on the icon within the button the Your Choice does not display the user choice of rock, paper or scissors which moves the image and heading below upwards.

 
After some research I found the fix on stack overflow to use event.currentTarget.id instead of event.target.id.
https://stackoverflow.com/questions/22962386/click-event-on-button-is-sending-an-icon-as-the-target  

### Validator Testing
•	W3C Markup Validation
![html validator](https://user-images.githubusercontent.com/85178695/132874768-b34e1db7-69ad-4797-833e-b9e1788a1eaf.png)


•	W3C CSS Validation
![css validator](https://user-images.githubusercontent.com/85178695/132874745-19e73b9b-bd1f-4267-8d1c-700355090458.png)


•	JS Hint
![js validator](https://user-images.githubusercontent.com/85178695/132874816-b5782342-015b-4497-9f68-cababc70fd50.png)


•	Lighthouse
![lighthouse results](https://user-images.githubusercontent.com/85178695/132874848-6d7610a3-f0fb-4cbf-a15e-5a871c14e073.png)


## Deployment
This website is hosted through GitHub and is deployed directly from the main branch. The deployed site will only update when new commits to the main branch have been pushed to GitHub.

## Credits
### Media
All images were taken from vecteezy which is an image library.
Icons were taken from Font Awesome 
### Acknowledgements
writing modal
https://www.w3schools.com/howto/howto_css_modals.asp

writing the timer
https://daily-dev-tips.com/posts/vanilla-javascript-timer/
