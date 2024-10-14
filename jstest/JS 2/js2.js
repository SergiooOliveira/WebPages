// Classe player
const player = {
    createPlayer: function(name, health, strength) {
        this.name = name,
        this.health = health,
        this.strength = strength,
        this.inventory = [],
        this.skillTree = []

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

    addItem: function(item) {
        this.inventory.push(item)
    },

    removeItem: function(item) {
        const itemIndex = this.inventory.indexOf(item)
        if (itemIndex > -1) {
            this.inventory.splice(itemIndex, 1)
        } else {
            console.log("Item not found")
        }
    },

    createSkill: function(name) {
        this.name = name,
        this.level = 0

        // Verify is skill already exists before adding
        for (let i = 0; i < player.skillTree.length; i++) {
            if (player.skillTree[i][0] == this.name) {
                console.log(this.name, "is already a skill")
                return
            }
        }

        this.skillTree.push([this.name, this.level])
    },



    increaseSkillLevel: function(skill) {              
        return {
            name: skill.name,
            level: skill.level + 1
        }
    },

    playerInfo: function() {
        console.log("Name: ", player.name)
        console.log("Health: ", player.health)
        console.log("Strength: ", player.strength)
        console.log("Inventory: ")
        for (let i of player.inventory) {
            console.log(i);
        }
        console.log("Skills: ")
        for (let i = 0; i < player.skillTree.length; i++) {
            console.log("Name:", player.skillTree[i][0], " Level:", player.skillTree[i][1]);
        }        
        console.log("////////////////////")
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
player1.addItem("Espada")
player1.addItem("Escudo")
player1.createSkill("Curar")
player1.createSkill("Raio")
player1.createSkill("Bash")
player1.createSkill("Curar")
const loot = enemy1.dropLoot()

player1.playerInfo()

console.log("/////////////////")
console.log("Upgraded Skills")
const upgradedSkills = player1.skillTree.map(player1.increaseSkillLevel)
for (let i = 0; i < upgradedSkills.length; i++) {
    console.log("Name:", upgradedSkills[i][0], " Level:", upgradedSkills[i][1]);
}   