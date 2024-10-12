// Classe player
const player = {
    createPlayer: function(name, health, strength) {
        this.name = name,
        this.health = health,
        this.strength = strength

        return player
    },
        
    attack: function() {
        console.log(this.strength)
    },

    takeDamage: function(damage) {
        this.health -= damage
        console.log("Player took ", damage," damage")
        if (this.health <= 0) {
            console.log("Player is dead")
        }
    },

    playerInfo: function() {
        console.log("Name: ", player.name)
        console.log("Health: ", player.health)
        console.log("Strength: ", player.strength)
    }
}

// Classe enemy
const enemy = {
    createEnemy: function(enemyType, health, strength) {
        this.enemyType = enemyType,
        this.health = health,
        this.strength = strength

        return enemy
    },

    attack: function() {
        console.log(this.strength)
    },

    dropLoot: function() {
        this.type = "Gold",
        this.amount = Math.floor((Math.random() * 50) + 1)

        return this
    }
}

const player1 = player.createPlayer("Mark", 100, 20)
const enemy1 = enemy.createEnemy("Goblin", 50, 15)

player1.attack()
player1.takeDamage(30)

const loot = enemy1.dropLoot()
console.log("Loot type = ", loot.type,". Loot amount = ", loot.amount)
