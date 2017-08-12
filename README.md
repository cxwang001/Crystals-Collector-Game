CrystalsCollector Game
![image](https://user-images.githubusercontent.com/27830803/29238232-86a2855e-7ee5-11e7-987d-67383e910483.png)

### Overview

I create another fun and interactive game for web browsers. This time, the app dynamically update your HTML pages with the jQuery library.


   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

 
    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.
