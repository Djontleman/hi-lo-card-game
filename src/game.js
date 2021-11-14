// =============== Game Class v0.1.1 =============== //

const Card = require("./card"); 
const StandardDeck = require("./standardDeck");

const Game = function() {
    this.player;
    this.continue = true;
    const standardDeck = new StandardDeck
    this.deck = standardDeck.cards;

    this.deck = shuffleDeck(this.deck);
    console.log(this.deck);
    
}

const turn = function(player, deck) {
    pass;

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