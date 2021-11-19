# High-Low Card Game Project

## About
A project aims to make the game High-Low using JavaScript. Currently, this is a command-line application, but the goal will be to develop a proper visual front-end, and maybe a back-end as well to allow for multiplayer across multiple computers.

## How to Set up
- Download .zip file or clone repo
- Run: npm install
- Run the game.js file (using node etc.)

## How to Play
After the game is started by running the game.js file, the user will be prompted to enter the number of players (currently defined as 1 - 8). The user then chooses Aces high or Aces low.
- Two cards from the top of the deck are laid out, one face-up and one face-down. 
- The player must then guess whether the face-down card is higher or lower than the face-up card. 
    - If they are correct, they gain a point. 
    - If they are incorrect, they lose a point. 
    - If the cards are the same, the points remain the same.
- After each turn, the player can choose to end the game and the points are displayed.

## Versions
Messing around with semantic versions cause why not :D
- v1.4.0: House rules - Option to redraw face-up card. Choose whether this rule is in play at start of game.
- v1.3.0: Round counter. Game asks for confirmation to end if the round is not over.
- v1.2.0: Multiple players supported
- v1.1.0: House rules - Choose Aces high or Aces low.
- v1.0.0: Command-line interface. Only one player is supported. Game continues until user chooses to end game. Reveal of the face-fown card is done by the user. No house rules.

## Future Plans
- Refactor code to be more conventional
- Unit-testing of methods 
- Betting/drinking game variations
- Front-end using React.js
- Back-end using Java and SQL(?)
- Player can leave early