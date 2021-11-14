// =============== Game Class v0.1.4 =============== //

const Card = require("./card"); 
const Player = require("./player");
const StandardDeck = require("./standardDeck");
const prompt = require("prompt-sync")();

const Game = function() {
    this.player;
    this.continue = true;
    const standardDeck = new StandardDeck
    this.deck = standardDeck.cards;

    this.player = new Player(1);

    this.deck = shuffleDeck(this.deck);
    turn(this.player, this.deck);
    
}

const turn = function(player, deck) {

    // End of deck array is defined as the "top of the deck"
    let comparisonCard = deck.pop();
    let guessCard = deck.pop();

    console.log("The face-up card is the " + comparisonCard.name + " of " + comparisonCard.suit);
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
            console.log("Error: Incorrect input");
        }
    }
      
    console.log("The face-down card is...");
    prompt("(Enter to reveal) ");
    console.log("The " + guessCard.name + " of " + guessCard.suit + "!")
    
    // setTimeout(reveal, 3000)
    // function reveal() {
    //     console.log("The " + guessCard.name + " of " + guessCard.suit + "!");
    // }

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

    deck.unshift(comparisonCard);
    deck.unshift(guessCard);
    
    console.log("Player " + player.playerNumber + "'s points: " + player.points);
}


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

Game();