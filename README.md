# Rock Paper Scissors
## Portfolio Project 2: Rock, Paper, Scissors Game – Code Institute
Rock Paper Scissors is a game which I think most people would have played at some point in their lives. It’s a simple game which can help family, friends and colleagues make decisions.
The target audience would be people of all ages that want to play a quick game.

![Am i responsive](https://user-images.githubusercontent.com/85178695/132874378-571f1939-e772-4d69-8bd6-3bf5a39cbcbd.png)

[View the live project here](https://lucy-glanville-brown.github.io/rock-paper-scissors/)

## UX
### User Stories
Create an interactive game Rock, Paper, Scissors where the user challenges the computer.

* At the top of the screen, display 3 control buttons for the user to select their choice.

* Button 1 will have the word Rock, and an icon showing the rock hand signal.

* Button 2 will have the word Paper, and an icon showing the paper hand signal.

* Button 3 will have the word Scissors, and an icon showing the scissors hand signal.

* Shadow the buttons for 3d effect to show the user they are clickable.

* Results area to show the results of the game

* Timer to see how quickly you can beat the computer

* Below this show the main game area which will display the user and computer choices as well as the main rock, paper scissors image.

* These images will change as the code accepts the User choice and generates the Computer choice. The images will update to show an image for the choices made, either rock, paper or scissors.

* Below the images show “Your Score:” and “Computer Score:”. The scores will increment by 1 when either the user or computer wins.

* Once the user has pressed one of the control buttons, the code will generate a random number between 0 and 2 to reflect the computers choice.  Both choices will then be shown as a single word and image in the game area for the user and computer, and the score below will be updated accordingly.

    The rules are as follows:-

    * Rock beats Scissors
    * Scissors beats Paper
    * Paper beats Rock

    If the users wins, add 1 to the users score and update the results with "You win"

    If the computer wins, add 1 to the computers score and update the results with "You lost"

    If the user and computer select the same choice this will be a draw and the scores will not need updating. Display the result as "It's a draw"

* Code an optional timer using the words “How quickly can you beat the computer” with a button to "Start timer". If the “Start timer” button is pressed, the code will start the mmss process and this time will be displayed in the “Time taken” area and update every second until the User wins the game.

* Reset scores button to reset the scores. If the Reset Timer button is pressed it will reset both scores to zero.

* "How to play" button which has a modal popup which explains the rules of the game.

    The popup should include the following

    * Instruction of how to play the game

    * Rules for the game showing rock beat scissors, scissors beats paper and paper beats rock

    * How quickly you can beat the computer instructions on how to use the timer

### Strategy
My goal in the design was to include minimalist but useful information with eye catching images. This website is aimed to attract all demographics with an interest in playing a quick simple game.

### Scope
For the users I wanted to provide them with instructions on how to play the game with images to show the options. The game has responsive design so should function correctly across various devices such as, Mobiles, Tablet, Laptop and Desktop.

### Structure
I wanted the game to be eye catching and fun with instructions of how to play the game. 

### Skeleton
The wireframes were created using Balsamiq.

![image](https://user-images.githubusercontent.com/85178695/132922311-f204ca44-b51e-4b55-9b10-3bf222a14119.png)


![image](https://user-images.githubusercontent.com/85178695/132922284-b6d0dfc0-61a0-4280-9767-6bbc51330444.png)


![image](https://user-images.githubusercontent.com/85178695/132922240-41bde68e-af03-421a-ae78-e73527b7ea5f.png)


### Surface
#### Images
The main rock paper scissors (rps) image was found on https://www.vecteezy.com/ and I cropped the image down to get the individual images for rock, paper and scissors. 

![image](https://user-images.githubusercontent.com/85178695/132922347-8d507dcc-b577-4057-8727-4a17e21bcfca.png)


![image](https://user-images.githubusercontent.com/85178695/132922376-09c361a6-049d-440b-83b7-066e7f7d8a23.png)



I also used an image resizer to get the images to the same size. https://resizeimage.net/
#### Colours
The colours chosen were from the main rock paper scissors (rps) image using Adobe Color Extract Theme. https://color.adobe.com/create/image

![Adobe Color Scheme](https://user-images.githubusercontent.com/85178695/132889839-043d0e89-0e7d-4a68-8078-1c9e7394eb3f.png)


Once the colours were chosen I used a contrast checker to decide on the text colour https://contrast-grid.eightshapes.com 

![contrast grid](https://user-images.githubusercontent.com/85178695/132889872-12f7683e-765c-4525-a995-f55024360445.png)


I also used mycolor.space to decide on the button box-shadow color for the 3 buttons coloured #04d9c4 https://mycolor.space/ 

![ColorSpace buttton shading palette](https://user-images.githubusercontent.com/85178695/132889907-64aa62ab-f8f9-4972-8837-f3a79de6d0e1.png)


#### Typography
I decided to use “Lato” and “San-serif” for the main body text with “Lobster” and “Sans-Serif” for the headings. These were found by exploring Google Fonts.

## Technologies
### Languages
1.	HTML
2.	CSS
3.	JavaScript
### Libraries
* Google Fonts – Lobster, Lato and Sans-serif fonts

* Font Awesome – used for icons throughout the website

* Balsamiq – used for the creation of the wireframes

## Features
### Header
* Featured at the top of the page shows the game name: Rock Paper Scissors in a font that is playful and clearly contrasts with the background.

![image](https://user-images.githubusercontent.com/85178695/132877778-a5c3b2a8-293d-43e4-bea6-355fb38e98ab.png)

### Controls
* Three buttons displaying the options of either rock, paper or scissors.

![image](https://user-images.githubusercontent.com/85178695/132878291-ffe1ac36-912b-4018-889d-c3242663eea1.png)


### Game Results
* When the user clicks an option, the image relating to their choice is shown on their side of the game board.

* The JavaScript code chooses a random option for the computer player, displays the image relating to the computer’s choice, and then determine who the winner is.

* The winner is announced to the user under the control buttons, and the score is updated for either the user or the computer depending on who won.

* The results and score are clear to the user, making the game easy to play, understand who won, and what the score is.

![image](https://user-images.githubusercontent.com/85178695/132877949-f1790f1c-30c5-471a-979d-a6af7b53d26d.png)

### Time taken
* The time taken to beat the computer is shown here if the user has been using the timer.


![image](https://user-images.githubusercontent.com/85178695/132878088-7c99cd18-71fe-4007-a4a4-3c0812484cac.png)

### Player area
* Your choice: will display the users chosen option of either rock, paper or scissors

* Player Image will show the rock, paper and scissors at the beginning of the game but will change depending on the user choice selected

* Your score: will increment by 1 when the user has won the game.

![image](https://user-images.githubusercontent.com/85178695/132879074-66d46e52-09b7-4917-a8a6-ea9f9d2bdf41.png)


### Computer area
* Computer choice: will display the computers chosen option of either rock, paper or scissors

* Computer Image will show the rock, paper and scissors at the beginning of the game but will change depending on the computer choice selected

* Computer score: will increment by 1 when the computer has won the game.

![image](https://user-images.githubusercontent.com/85178695/132879134-e4ca5bc6-a737-4d26-931e-1a55c015adc0.png)


### Start timer – button
* Button which will start the timer once it has been clicked

![image](https://user-images.githubusercontent.com/85178695/132879452-7724f204-b2dc-420a-9de5-1a30152f5d12.png)


### Reset scores - button
* Button which will reset both the user and computer scores once it has been clicked

![image](https://user-images.githubusercontent.com/85178695/132879483-a59cd1b9-a594-49b9-aa01-3260b9d5d151.png)


### How to Play - button
* Button which will open the 'How to play' modal once it has been clicked

![image](https://user-images.githubusercontent.com/85178695/132879624-14e425e9-5d4f-4ef0-8dce-47e5e8bd2e87.png)


### How to Play - the Modal
* Instructions on how to play the game

* Rules for how to win the game

* How quickly can you beat the computer explains that you can use the timer option if you want to see how quickly you can win.

![image](https://user-images.githubusercontent.com/85178695/132879723-3501b805-2583-4ad4-81db-ba978bdc692c.png)


## Future Enhancements
* Game Modes - options to select how many rounds you would like to play like best of 5 rounds

* Difficulty - options to select the difficulty levels

* Multiplayer - option to play against another user or to invite someone to play with you


## Testing
I have tested this game in Google Chrome, Mozilla Firefox, Safari and Microsoft Edge, as well as on my Apple iPhone SE and Huawei tablet (android.)

* Clicked on Rock button and Your Choice showed Rock and the computer generated choice was also shown.  The Result was shown correctly.

* Clicking on the Paper and Scissors button also showed the correct choice.

* The Your Score and Computer Score were also updating correctly, adding 1 to Your Score if the user won, adding 1 to Computer Score if the computer won, and not changing if it was a draw.

* I did notice that occasionally the Your Choice didn’t update correctly, this has now been resolved and has been documented in the bugs section.

* I then tested the timer by clicking “Start timer”.

* The Time taken was correctly updating every second.

* As soon as the user won, the timer stopped, which is correct.

* I then tested the How to Play button and it correctly displayed the information in a pop up box, including an X to close the box.

* I then tested the Reset Scores button, and it reset both scores to zero, which is correct.

### Bugs
* When you clicked on the icon within the button the Your Choice did not display the user choice of rock, paper or scissors which moved the image and heading below upwards.

![icon button bug](https://user-images.githubusercontent.com/85178695/132890169-60161195-97df-4098-9084-d2b1f9dad8fb.png)

 
After some research I found the fix on stack overflow to use event.currentTarget.id instead of event.target.id.

https://stackoverflow.com/questions/22962386/click-event-on-button-is-sending-an-icon-as-the-target 

JavaScript code before change

![javascript code before change](https://user-images.githubusercontent.com/85178695/132890213-a97516b6-0560-409c-8cc2-a9049bcafe0f.png)

JavaScript code after change

![javascript code after change](https://user-images.githubusercontent.com/85178695/132890221-e24c34d1-d3cb-49c1-8828-5b9592e8bcee.png)



### Validator Testing
* W3C Markup Validation

![html validator](https://user-images.githubusercontent.com/85178695/132874768-b34e1db7-69ad-4797-833e-b9e1788a1eaf.png)


* W3C CSS Validation

![css validator](https://user-images.githubusercontent.com/85178695/132874745-19e73b9b-bd1f-4267-8d1c-700355090458.png)


* JS Hint

![js validator](https://user-images.githubusercontent.com/85178695/132874816-b5782342-015b-4497-9f68-cababc70fd50.png)


* Lighthouse

![lighthouse results](https://user-images.githubusercontent.com/85178695/132874848-6d7610a3-f0fb-4cbf-a15e-5a871c14e073.png)


## Deployment
This website is hosted through GitHub and is deployed directly from the main branch. The deployed site will only update when new commits to the main branch have been pushed to GitHub.

### GitHub Pages
The project was deployed to GitHub Pages using the following steps:
1.	Log in to GitHub and locate the GitHub Repository
2.  Click on 'Settings'
3.  Scroll down and click on 'Pages' on the left-hand side menu.
4.  Select the 'Branch' 'master' and click on 'Save'.
5.  Allow GitHub a few minutes to deploy the website and then refresh the page.
6.  Website deployed.

## Credits
### Media
* All images were taken from vecteezy which is an image library.

* Icons were taken from Font Awesome 
### Acknowledgements
My mentor Nishant Kumar suggested having the 'How to play' instructions in a modal and also to add a timer to see how quickly you can beat the computer.  

I found how to create a modal on W3 Schools.

https://www.w3schools.com/howto/howto_css_modals.asp

For the timer I followed the instructions on daily dev tips.

https://daily-dev-tips.com/posts/vanilla-javascript-timer/
