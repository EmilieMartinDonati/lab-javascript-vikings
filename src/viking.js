// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}


// Viking
class Viking extends Soldier {
   constructor (name, health, strength) {
     super(health, strength); 
     this.name = name;
     }
     receiveDamage(damage) {
       this.health = this.health - damage;
     if (this.health > 0) {
       return `${this.name} has received ${damage} points of damage`;
     }
     else {
       return `${this.name} has died in act of combat`;
     }
     }
     battleCry() {
       return "Odin Owns You All!";
     }
   } 

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
  if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
  }
  else {
    return `A Saxon has died in combat`;
  }
  }
}

// War
class War {
  constructor(){
this.vikingArmy = [];
this.saxonArmy = [];
  }
addViking(Viking) {
  this.vikingArmy.push(Viking);
  console.log(this.vikingArmy)

}
addSaxon(Saxon) {
  this.saxonArmy.push(Saxon);
}
vikingAttack() {
  // Math.random()  Return a vlue between 0 and 1
  // let a = [1,2,6,8,4,3,7] Math.random * a.length
  //  Math.floor(9.9) => 9
  // Math.floor(Math.random() * a.length)
  let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
  let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  const score = randomSaxon.receiveDamage(randomViking.strength);
  if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(randomSaxon, 1);
    }
    return score;
  }

saxonAttack() {
  let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
  let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  const score = randomViking.receiveDamage(randomSaxon.strength);
  if (randomViking.health <= 0) {
    this.vikingArmy.splice(randomViking, 1);
    }
    return score;
}
showStatus() {
  if (!this.vikingArmy.length) {
    return "Saxons have fought for their lives and survived another day...";
  }
  if (!this.saxonArmy.length) {
    return "Vikings have won the war of the century!";
  }
  else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
