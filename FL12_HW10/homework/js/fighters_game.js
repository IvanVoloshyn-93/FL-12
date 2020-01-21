class Fighter {
    constructor({name, damage, strength, agility, hp}) {
        let fighterInfo = {
            name: name,
            damage: damage,
            strength: strength,
            agility: agility,
            hp: hp
        };
        let totalHP = hp;
        let winsCount = 0;
        let lossesCount = 0;

        this.getName = () => fighterInfo.name;
        this.getDamage = () => fighterInfo.damage;        
        this.getStrength = () => fighterInfo.strength;
        this.getAgility = () => fighterInfo.agility;
        this.getHealth = () => fighterInfo.hp;
        this.getTotalHealth = () => totalHP;
        this.getWins = () => winsCount;
        this.getLosses = () => lossesCount;
        this.dealDamage = (damage) => {
            fighterInfo.hp - damage >= 0 ?
            fighterInfo.hp -= damage :
            fighterInfo.hp = 0;
        };
        this.heal = (healPoint) => {
          healPoint + this.getHealth() < this.getTotalHealth() ? fighterInfo.hp += healPoint : fighterInfo.hp = totalHP;
        };
        this.addWin = () => ++winsCount;
        this.addLoss = () => ++lossesCount;
        this.logCombatHistory = () => {
            console.log(`Name: ${this.getName()}, Wins : ${this.getWins()}, Losses : ${this.getLosses()}`)
        }
    }

    
    attack(defender) {
        const maxAttack = 100;
        const attackPropability = defender.getStrength() + defender.getAgility();
        const resultAttack = Math.ceil(Math.random() * Math.floor(maxAttack)) <= attackPropability;
        if (resultAttack) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
}

function battle(fighter1, fighter2) {
    if ((fighter1.getHealth() && fighter2.getHealth()) > 0) {
        round(fighter1, fighter2)
    } else if (fighter1.getHealth === 0) {        
        console.log(`${fighter1.getName()} is dead and can't fight.`);                
    } else {        
        console.log(`${fighter2.getName()} is dead and can't fight.`);
               
    }
}

function round (fighter1, fighter2) {
    fighter1.attack(fighter2);
    if (fighter2.getHealth() > 0) {
        fighter2.attack(fighter1);
        if (fighter1.getHealth() > 0) {
            round(fighter1, fighter2)
        } else {
            fighter2.addWin();
            fighter1.addLoss();
            console.log(`${fighter2.getName()} has won!`);
        }
    } else {
        fighter1.addWin();
        fighter2.addLoss();
        console.log(`${fighter1.getName()} has won!`);
    }
}

