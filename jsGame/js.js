const player1 = {
    starter: function() {        
        this.name = "Player 1"
        this.score = document.getElementById("score--0")
        this.currentScore = document.getElementById("current--0")

        return player1
    },

    addScore: function(currentScore) {
        console.log(Number(this.score.textContent))
        console.log(currentScore)

        let score = Number(this.score.textContent)
        score += currentScore

        this.score.textContent = score
        this.currentScore.textContent = "0"
    }
}

const player2 = {
    starter: function() {
        this.name = "Player 2"
        this.score = document.getElementById("score--1")
        this.currentScore = document.getElementById("current--1")

        return player2
    },

    addScore: function(currentScore) {
        console.log(Number(this.score.textContent))
        console.log(currentScore)

        let score = Number(this.score.textContent)
        score += currentScore

        this.score.textContent = score
        this.currentScore.textContent = "0"
    }
}

const roll = function() {
    // Roll dice
    // Add result to current Score
    // If number == 1 Passes turn
    
    let roll = Math.trunc(Math.random() * 6) + 1
    let currentScore = Number(player1.currentScore.textContent)
    currentScore += roll
    
    player1.currentScore.textContent = currentScore
}

const hold = function() {
    player1.addScore(Number(player1.currentScore.textContent))
}

player1.starter();
player2.starter();
let players = [{player1, player2}]


document.querySelector(".btn--roll").addEventListener("click", roll);
document.querySelector(".btn--hold").addEventListener("click", hold);