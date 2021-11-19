// =============== Game Class =============== //

const Card = require("./card"); 
const Player = require("./player");
const StandardDeck = require("./standardDeck");
const prompt = require("prompt-sync")();

const Game = function() {
    this.players = [];
    this.player;
    this.playerNumber = 0; 
    this.continue = true;
    this.deck;
    this.round = 0;
    this.redraw;

    // Welcome prompt
    console.log();
    console.log("Welcome to High-Low!");
    console.log();

    // Number of players
    let numberOfPlayers;
    while(true) {
        numberOfPlayers = parseInt(prompt("How many players are there? (1 - 8) "));
        if (numberOfPlayers > 0 && numberOfPlayers <= 8) { // Number of players between 1 and 8
            break;
        } else {
            console.log("Error: Invalid input");
            console.log();
        }
    }
    for (i = 1; i <= numberOfPlayers; i++) {
        this.players.push(new Player(i));
    }
    console.log();

    // House rules - Aces high/low
    const standardDeck = new StandardDeck;
    while(true) {
        let acesHigh = prompt("Aces high or Aces low? (h or l) ");
        if (acesHigh == "l") {
            this.deck = standardDeck.cards;
            break;
        } else if (acesHigh == "h") {
            standardDeck.acesHigh();
            this.deck = standardDeck.cards;
            break;
        } else {
            console.log("Error: invalid input");
            console.log();
        }
    }
    console.log();

    // House rules - Redraw face-up card
    while(true) {
        let redrawResponse = prompt("Option to redraw face-up card? (y or n) ");
        if (redrawResponse == "y") {
            this.redraw = true;
            break;
        } else if (redrawResponse == "n") {
            this.redraw = false;
            break;
        } else {
            console.log("Error: invalid input");
            console.log();
        }
    }
    console.log();

    // Shuffle deck
    this.deck = shuffleDeck(this.deck);

    // Game begin prompt
    console.log("Let the game begin!");
    console.log();

    // Turns
    while(this.continue) {
        
        // Assign player to turn
        if (this.playerNumber > 0 && this.playerNumber < this.players.length) {
            this.playerNumber++;
        } else {
            this.playerNumber = 1;
            this.round++;
        }
        this.player = this.players[this.playerNumber - 1];

        console.log("Round " + this.round + ":");
        console.log("Player " + this.player.playerNumber + "'s turn starting...")
        this.player, this.deck = turn(this.player, this.deck, this.redraw);
        
        // Displays if round has finished
        if (this.player === this.players[this.players.length - 1]) {
            console.log("Round " + this.round + " finished")
        }

        // Continue or end game prompt
        while(true) {
            let continueResponse = prompt("Continue? (y or n) ");
            if (continueResponse == "n") {
                this.continue = false;

                // Ask for confirmation to end game if round not over
                let endGameConfirm;
                if (this.player != this.players[this.players.length - 1]) {
                    while(true) {
                        endGameConfirm = prompt("Round is not over, are you sure? (y or n) ");
                        if (endGameConfirm == "n") {
                            this.continue = true;
                            break;
                        } else if (endGameConfirm == "y") {
                            break;
                        } else {
                            console.log("Error: Invalid input");
                            console.log();
                        }
                    }
                }

                console.log();
                break;
            } else if (continueResponse == "y") {
                console.log();
                break;
            } else {
                console.log("Error: Invalid input");
                console.log();
            }
        }
    }

    // Final points displayed
    console.log("Final points:");
    for (player of this.players) {
        console.log("Player " + player.playerNumber + ": " + player.points);
    }
    console.log();

    // Goodbye prompt
    console.log("Thanks for playing High-Low!");
    console.log();
}

// Turn method
const turn = function(player, deck, redraw) {

    // End of deck array is defined as the "top of the deck"
    // Lay out top two cards
    let comparisonCard = deck.pop(); // face-up
    let guessCard = deck.pop();      // face-down

    console.log("The face-up card is the " + comparisonCard.name + " of " + comparisonCard.suit);
    console.log();
    if (redraw == true) {
        while(true) {
            let drawNewResponse = prompt("Do you want to draw a new card? (y or n) "); // option to redraw face-up card
            if (drawNewResponse == "y") {
                deck.unshift(comparisonCard);
                comparisonCard = deck.pop();
                console.log("The face-up card is the " + comparisonCard.name + " of " + comparisonCard.suit);
                break;
            } else if (drawNewResponse == "n") {
                break;
            } else {
                console.log("Error: Invalid input");
                console.log();
            }
        }
        console.log();
    }

    // User inputs guess
    let guessing = true;
    while(guessing) {
        player.guess = prompt("What is your guess? (1 for higher, 2 for lower) ")
        if (player.guess == 1) {
            console.log("Your guess is 'higher'");
            break;
        } else if (player.guess == 2) {
            console.log("Your guess is 'lower'");
            break;
        } else {
            console.log("Error: Invalid input");
        }
    }
      
    // Reveal, user reveals the result
    console.log();
    console.log("The face-down card is...");
    prompt("(Enter to reveal) ");
    console.log();
    console.log("The " + guessCard.name + " of " + guessCard.suit + "!")
    
    // Result
    if (player.guess == 1 && comparisonCard.value < guessCard.value
        || player.guess == 2 && comparisonCard.value > guessCard.value) {
            console.log("You were correct!");
            player.points++;
    } else if (player.guess == 2 && comparisonCard.value < guessCard.value
        || player.guess == 1 && comparisonCard.value > guessCard.value) {
            console.log("You were wrong!");
            player.points--;
    } else {
        console.log("The values were the same!");
    }

    // Cards replaced into deck
    deck.unshift(comparisonCard);
    deck.unshift(guessCard);
    player.guess = undefined;
    
    // Display current player's points
    console.log();
    console.log("Player " + player.playerNumber + "'s points: " + player.points);
    console.log();

    return player, deck;
}

// Shuffle deck method
const shuffleDeck = function(deck) {
    const unshuffledDeck = deck;
    const shuffledDeck = [];

    while(unshuffledDeck.length > 0) {
        let randomNum = Math.floor(Math.random() * unshuffledDeck.length);
        let randomCard = unshuffledDeck[randomNum];
        unshuffledDeck.splice(randomNum, 1);
        shuffledDeck.push(randomCard);
    }

    return shuffledDeck;
}

// Runs the game
Game();