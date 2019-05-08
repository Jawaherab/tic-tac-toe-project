
# Welcome to the TicTacToe Game , a simple Javascript web application allowing users to interact with the game,
# The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game .

# The goal of this project is to develop a responsive website of Tic-Tac-Toe game  and allows multi-player
# to choose whether to play as (X or O) or plays against the computer.





List technologies used
HTML
CSS
jquery
JavaScript{
If statement
forEach() method
object
While statement
}
Sweet alert
https://sweetalert.js.org/
The prompt() method 
Animate css
https://daneden.github.io/animate.css/?


Link to wireframes and user stories.

As a user, you able to start a new tic tac toe game
As a user, you able to click on a square to add X first and then O, and so on
As a user, you show a message after each turn for if I win, lose, tie or who's turn it is next
As a user, you not able to click the same square twice
As a user, you show a message when you win, lose or tie
As a user, you not able to continue playing once you win, lose, or tie
As a user, you able to play the game again without refreshing the page

As a user, you able to  track of multiple game rounds with a win, lose and tie counter
As a user, you can choose your tokens (X, O)
As a user, you can play the Audio in your game
As a user, you able to play a game against computer
As a user, you able to  playable from a mobile phone with a responsive web design
 Creative design with hover effects and animations



Document your planning and tell a story about your development process and problem-solving strategy.


How to play
Players selection
You need to insert the player that goes first X or O players.

Human versus Human.
If two human players start to play, you just need to
 click in an empty position in the grid to display (X or O).  

Human versus Computer.
click on button ,If you want to play with computer ,  If it is your turn, 
just click in the position you want to play in the grid. After that the computer will perform its move. 

 win counter:
 if a players win , their score  increase

Game over:
If a player forms a row, a column or a diagonal with same letter player wins and the game ends. 
If the grid is full and there’s no row, column or diagonal of the same letter,the game ends at draw. 

Once the game has a winner or a draw, you will see a dialog informing about the result. 
if you want to play again just click on reset button .



List unsolved problems which would be fixed in future iterations :

When play with a computer, the score of winner increase twice.



Describe how you solved for the winner :

I used forEach() method executes a provided function once each element of an a correctValue array.
the function checks if  row or vertical line or  diagonal have a same letter ("XXX","OOO")
you will see a dialog informing about whose the winner, and the counter of score increase automaticly



It was fun and very challenging to me as this is the first time to build an game application


