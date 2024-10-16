// Classe player
const player = {
    createPlayer: function(name, health, strength) {
        this.name = name,
        this.health = health,
        this.strength = strength,
        this.inventory = [],
        this.skillTree = [],
        this.abilities = [],
        this.score = []

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

    addItem: function(name, quantity, type) {
        this.inventory.push([name, quantity, type])
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

    createAbility: function(name) {
        this.name = name,
        this.power = 1

        // Verify is skill already exists before adding
        for (let i = 0; i < player.abilities.length; i++) {
            if (player.abilities[i][0] == this.name) {
                console.log(this.name, "is already an ability")
                return
            }
        }

        this.abilities.push([this.name, this.power])
    },

    increaseAbilityPower: function(ability) {                      
        return {
            name: ability.name,
            power: ability.power + ability.power * 0.2
        }
    },

    increaseScore: function(score) {
        this.score.push(score)
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
        this.name = "Gold"
        this.type = "Money",
        this.amount = Math.floor((Math.random() * 50) + 1)

        return this
    }
}

const challenges = [
    {
        "name": "Specter's Abyss",
        "difficulty": 2
    },
    {
        "name": "Roaring Temple",
        "difficulty": 5
    },
    {
        "name": "Cave of Desperation",
        "difficulty": 7
    },
    {
        "name": "Death's Abyss",
        "difficulty": 1
    },
    {
        "name": "Cursed Wasteland",
        "difficulty": 10
    },
    {
        "name": "Temple of Slaughter",
        "difficulty": 6
    },
    {
        "name": "Butcher's Canyon",
        "difficulty": 8
    },
    {
        "name": "Tyrant's Isle",
        "difficulty": 9
    },
    {
        "name": "Cave of Destruction",
        "difficulty": 7
    },
    {
        "name": "Island of Terror",
        "difficulty": 5
    },
]

const healthItems = [
    {
        "name": "Potion",
        "restore": 30,
        "quantity": 2
    },
    {
        "name": "Health",
        "restore": 60,
        "quantity": 10
    }
]

//#region variables
const player1 = player.createPlayer("Mark", 100, 20)
const enemy1 = enemy.createEnemy("Goblin", 50, 15)
player1.attack()
player1.takeDamage(30)
player1.addItem("Sword", 1, "Weapon")
player1.addItem("Shield", 1, "Equipment")
player1.addItem("Gold", 50, "Money")
player1.addItem("Life potion", 3, "Potion")
player1.addItem("Staff", 1, "Weapon")
player1.createSkill("Curar")
player1.createAbility("Força")
player1.increaseScore(10)
player1.increaseScore(9)
player1.increaseScore(14)
const loot = enemy1.dropLoot()
//#endregion

player1.playerInfo()

console.log("/////////////////")
console.log("Upgraded Skills")

// .map Skills
const upgradedSkills = player1.skillTree.map(skill => player1.increaseSkillLevel({
    name: skill[0],
    level: skill[1]
}))

// .map Abilities
const boostedAbilities = player1.abilities.map(ability => player1.increaseAbilityPower({
    name: ability[0],
    power: ability[1]
}))

// .filter isWeapon
const weapons = player1.inventory.filter(item => item[2] == "Weapon")

// .filter challenges > 7
const hardChallenges = challenges.filter(isHard => isHard.difficulty > 7) 

// .reduce scores
const totalScore = player1.score.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

// .reduce healthItems
const totalHealthRestore = healthItems.reduce((accumulator, item) => {
    return accumulator + (item.restore * item.quantity);
}, 0);

console.log(upgradedSkills)
console.log(boostedAbilities)
console.log(weapons)
console.log(hardChallenges)
console.log(totalScore)
console.log(totalHealthRestore)