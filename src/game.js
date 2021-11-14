// =============== Game Class v0.1.6 =============== //

const Card = require("./card"); 
const Player = require("./player");
const StandardDeck = require("./standardDeck");
const prompt = require("prompt-sync")();

const Game = function() {
    this.player;
    this.continue = true;
    const standardDeck = new StandardDeck
    this.deck = standardDeck.cards;

    // Welcome prompt
    console.log();
    console.log("Welcome to High-Low!");
    let numberOfPlayers = prompt("How many players are there? (Currently only 1 player is generated) ")
    console.log();

    // Assign players
    this.player = new Player(1);

    // Shuffle deck
    this.deck = shuffleDeck(this.deck);

    // Game begin prompt
    console.log("Let the game begin!");
    console.log();

    // Turns
    while(this.continue) {
        console.log("Player " + this.player.playerNumber + "'s turn starting...")
        this.player, this.deck = turn(this.player, this.deck);
        
        // Continue or end game prompt
        while(true) {
            let continueResponse = prompt("Continue? (y or n) ");
            if (continueResponse == "n") {
                this.continue = false;
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
    console.log("Player " + this.player.playerNumber + ": " + this.player.points);
    console.log();

    // Goodbye prompt
    console.log("Thanks for playing High-Low!");
    console.log();
}

// Turn method
const turn = function(player, deck) {

    // End of deck array is defined as the "top of the deck"
    // Lay out top two cards
    let comparisonCard = deck.pop(); // face-up
    let guessCard = deck.pop();      // face-down

    console.log("The face-up card is the " + comparisonCard.name + " of " + comparisonCard.suit);
    console.log();

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