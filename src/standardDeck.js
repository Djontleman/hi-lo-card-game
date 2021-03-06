// =============== Standard Deck =============== //

const Card = require("./card");

const StandardDeck = function() {
    this.cards = [
        new Card(1, "Hearts", "Ace"), 
        new Card(1, "Diamonds", "Ace"),
        new Card(1, "Spades", "Ace"), 
        new Card(1, "Clubs", "Ace"),
        new Card(2, "Hearts", "2"),   
        new Card(2, "Diamonds", "2"),   
        new Card(2, "Spades", "2"),   
        new Card(2, "Clubs", "2"),
        new Card(3, "Hearts", "3"),    
        new Card(3, "Diamonds", "3"),   
        new Card(3, "Spades", "3"), 
        new Card(3, "Clubs", "3"),
        new Card(4, "Hearts", "4"),     
        new Card(4, "Diamonds", "4"),   
        new Card(4, "Spades", "4"), 
        new Card(4, "Clubs", "4"),
        new Card(5, "Hearts", "5"),     
        new Card(5, "Diamonds", "5"),   
        new Card(5, "Spades", "5"), 
        new Card(5, "Clubs", "5"),
        new Card(6, "Hearts", "6"),     
        new Card(6, "Diamonds", "6"),   
        new Card(6, "Spades", "6"), 
        new Card(6, "Clubs", "6"),
        new Card(7, "Hearts", "7"),     
        new Card(7, "Diamonds", "7"),   
        new Card(7, "Spades", "7"), 
        new Card(7, "Clubs", "7"),
        new Card(8, "Hearts", "8"),     
        new Card(8, "Diamonds", "8"),   
        new Card(8, "Spades", "8"), 
        new Card(8, "Clubs", "8"),
        new Card(9, "Hearts", "9"),     
        new Card(9, "Diamonds", "9"),   
        new Card(9, "Spades", "9"), 
        new Card(9, "Clubs", "9"),
        new Card(10, "Hearts", "10"),   
        new Card(10, "Diamonds", "10"), 
        new Card(10, "Spades", "10"), 
        new Card(10, "Clubs", "10"),
        new Card(11, "Hearts", "Jack"), 
        new Card(11, "Diamonds", "Jack"), 
        new Card(11, "Spades", "Jack"), 
        new Card(11, "Clubs", "Jack"),
        new Card(12, "Hearts", "Queen"), 
        new Card(12, "Diamonds", "Queen"),
        new Card(12, "Spades", "Queen"), 
        new Card(12, "Clubs", "Queen"),
        new Card(13, "Hearts", "King"), 
        new Card(13, "Diamonds", "King"), 
        new Card(13, "Spades", "King"), 
        new Card(13, "Clubs", "King")
    ]
}

StandardDeck.prototype.acesHigh = function() {
    const acesLow = this.cards;
    const acesHigh = [];

    for (i = 0; i < acesLow.length; i++) {
        acesHigh.push(acesLow[i]);

        if (acesHigh[i].value == 1) {
            acesHigh[i].value = 14;
        }
    }

    this.cards = acesHigh;
}

module.exports = StandardDeck;