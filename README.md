# Coding Minigames #

## Authors: Cameryn Duarte, Michael Kenton ##

As a user, I want to be able to enter my user name, then choose a game to play and have my scores saved to the database under my name. Finally, I should be able to see my highscores saved on the stats page. This application will allow a user to play games and save their scores to a RESTful API (using a json-server). The highscores will be posted to a stats page, displaying the highest and lowest ranking players. 

A NavBar component contains Home and Stats components. Home is the containing an input field for the player name and routes to each game, where you play under said name. Playing the game will post score data to the API associated with the entered user name. Stats will not contain any routes, but display data of high scores of users stored in the API.


![Proj-2 wireframe](https://user-images.githubusercontent.com/86212620/130524244-0c449e2c-5e19-45d8-a7c1-b2fe6474e374.png)
