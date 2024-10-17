// Classe player
const player = {
    createPlayer: function(name, health, strength) {
        this.name = name,
        this.health = health,
        this.strength = strength,
        this.inventory = [],
        this.healthItems = [],
        this.skillTree = [],
        this.abilities = [],
        this.score = []

        return player
    },
        
    attack: function(enemy) {
        enemy.health -= this.strength
    },

    takeDamage: function(damage) {
        this.health -= damage
        console.log("Player took ", damage," damage")
        if (this.health <= 0) {
            console.log("Player is dead")
        }
    },

    addItem: function(name, quantity, type) {
        if (name === "Gold") {
            const itemIndex = this.inventory.findIndex(item => item[0] == "Gold")
            if (itemIndex > -1) {
                this.inventory[itemIndex][1] += quantity
            } else {
                this.inventory.push([name, quantity, type])
            }
        } else
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

    addPotion: function(name, restore, quantity) {
        console.log("Found potion:", name, restore, quantity)
        if (restore == 30) {
            const itemIndex = this.healthItems.findIndex(potion => potion[1] == 30)
            if (itemIndex > -1) {
                this.healthItems[itemIndex][2] += quantity
            } else {
                this.healthItems.push([name, restore, quantity])
            }
        } else if (restore == 60) {
            const itemIndex = this.healthItems.findIndex(potion => potion[1] == 60)
            if (itemIndex > -1) {
                this.healthItems[itemIndex][2] += quantity
            } else {
                this.healthItems.push([name, restore, quantity])
            }
        }
    },

    usePotion: function() {
        // Use potion to restore hp
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
        console.log("Potions")
        for (let i of player.healthItems) {
            console.log(i);
        }
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

    attack: function(player) {
        player.health -= this.strength
    },

    dropLoot: function() {
        this.name = "Gold"
        this.amount = Math.floor((Math.random() * 50) + 1),
        this.type = "Money"

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

const combatRound = function(player, enemy) {
    let i = 0
    do {        
        player.attack(enemy)
        enemy.attack(player)
        /* console.log("Round", i++)
        console.log(player.health)
        console.log(enemy.health) */
    } while (player.health > 0 && enemy.health > 0)

    if (player.health <= 0 && enemy.health <= 0) {
        // Draw
        console.log("Draw")
    }
    else if (player.health <= 0) {
        // Enemy won
        console.log("Enemy won")
    }
    else {
        // Player won
        console.log("Player won with", player.health, "left")
        enemyLoot = enemy.dropLoot()
        player.addItem(enemyLoot.name, enemyLoot.amount, enemyLoot.type)
    }
    
    return player
}

const randomEvent = function() {
    /*
    switch (event) {
        case 1: return "Enemy encountered"
        case 2: return "Potion encountered"
        case 3: return "Money encountered"
        case 4: return "Item encountered"
        case 5: return "Use potion"
    }
    */
    return Math.floor((Math.random() * 5) + 1)
    
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function simulateGame(player) {
    console.log("Starting game")
    do {
        let event = randomEvent()
        console.log("Evento:", event)
        switch (event) {
            case 1: {
                /* 
                    Enemy encountered
                    Create random Enemy
                    combatRound(player, randomEnemy)
                    2 types of enemies. Goblins -> Low HP, High Strength // Orcs -> High HP, Low Strength
                */
                let enemyType = Math.floor((Math.random() * 2) + 1)
                let enemyLife, enemyStrength
                switch (enemyType) {
                    case 1: {
                        // Goblin
                        enemyType = "Goblin"
                        enemyLife = Math.floor((Math.random() * 30) + 15)
                        enemyStrength = Math.floor((Math.random() * 30) + 20)
                    } break
                    case 2: {
                        // Orc
                        enemyType = "Orc"
                        enemyLife = Math.floor((Math.random() * 60) + 35)
                        enemyStrength = Math.floor((Math.random() * 15) + 10)
                    } break
                }
                const enemy1 = enemy.createEnemy(enemyType, enemyLife, enemyStrength)
                
                player = combatRound(player, enemy1)
            } break
            case 2: {
                /*
                    Potion encountered
                    Potion restore -> 30 or 40
                    Potion Quantity -> 1 to 3
                */
               let potionName = "Potion"
               let potionRestoreDef = Math.floor((Math.random() * 2) + 1)
               let potionRestore = potionRestoreDef === 1 ? 30 : 60
               let potionQuantity = Math.floor((Math.random() * 3) + 1)
               player.addPotion(potionName, potionRestore, potionQuantity)
            } break
            case 3: {
                /*
                    Money encountered
                    Create Money
                    Add Money
                */
                let itemName, itemAmount, itemType
                itemName = "Gold"
                itemAmount = Math.floor((Math.random() * 10) + 5)
                itemType = "Money"

                player.addItem(itemName, itemAmount, itemType)
                console.log("Found", itemAmount, "Gold")
            } break
            case 4: {
                /*
                    Item encountered
                    Create Item
                    Add Item

                    Item List:
                    - Sword
                    - Staff
                    - Shield
                    - Armor
                */
                let itemName, itemAmount = 1, itemType

                let item = Math.floor((Math.random() * 4) + 1)
                switch (item) {
                    case 1: {
                        itemName = "Sword"
                        itemType = "Weapon"
                    } break
                    case 2: {
                        itemName = "Staff"
                        itemType = "Weapon"
                    } break
                    case 3: {
                        itemName = "Shield"
                        itemType = "Equipment"
                    } break
                    case 4: {
                        itemName = "Armor"
                        itemType = "Armor"
                    } break
                }

                player.addItem(itemName, itemAmount, itemType)
                console.log("Found", itemName)
            } break
            case 5: {
                /*
                    Use health potion
                */
               player.usePotion()
            } break
        }

        //await delay(500);
    } while (player.health > 0)    
    player.playerInfo()
}

//#region variables
const player1 = player.createPlayer("Mark", 100, 20)
const enemy1 = enemy.createEnemy("Goblin", 50, 15)
player1.addItem("Sword", 1, "Weapon")
player1.addItem("Shield", 1, "Equipment")
player1.addItem("Gold", 50, "Money")
player1.addItem("Staff", 1, "Weapon")
player1.createSkill("Curar")
player1.createAbility("Força")
player1.increaseScore(10)
player1.increaseScore(9)
player1.increaseScore(14)
const loot = enemy1.dropLoot()
/* const healthItems = [
    {
        "name": "Potion",
        "restore": 30,
        "quantity": 2
    },
    {
        "name": "Potion",
        "restore": 60,
        "quantity": 10
    }
]
player1.healthItems = healthItems */
//#endregion

//#region .map / .filter / .reduce
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
const totalScore = player1.score.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// .reduce healthItems
const totalHealthRestore = player1.healthItems.reduce((accumulator, item) => {
    return accumulator + (item.restore * item.quantity)
}, 0)
//#endregion

// combatRound
//combatRound(player, enemy)

// randomEvent
const event = randomEvent()

// Simulate game
simulateGame(player1)

/* 
player1.playerInfo()
console.log(upgradedSkills)
console.log(boostedAbilities)
console.log(weapons)
console.log(hardChallenges)
console.log(totalScore)
console.log(totalHealthRestore)
*/


