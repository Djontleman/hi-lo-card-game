// =============== Player Class =============== //

const Player = function(playerNumber) {
    this.playerNumber = playerNumber;
    this.points = 0;
    this.guess;
}

module.exports = Player;