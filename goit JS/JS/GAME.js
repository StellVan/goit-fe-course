'use strict'

// const he = {
//     name: "Bond",
//     number: 7,
//     getName() {
//         console.log(this.name);
//     }
// }

// const she = Object.create(he)
// she.name = "Eva"
// she.level = 50
// she.power = 4

// console.log(he);

// console.log(she);


// function DRAGON(name = "Warrior", level = 0) {
//     this.name = name;
//     this.level = level;
// }

// DRAGON.prototype.getLevel = function(el){
//     return this.level += el;
// }

// const dragon = new DRAGON('Bond', 80)

// dragon.getLevel(20)

// console.log(dragon);
function RNG(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
  }

class Myclass {
    constructor(name, hp, baseDamage, weapon = "fists", level = 0) {
        this.name = name,
        this.race = race,
        this.level = level,
        this.hp = hp,
        this.baseDamage = baseDamage,
        this.weapon = weapon
    }
    getName() {
        return this.name = prompt("Enter name");
    }
    minus(el) {
        return this.xp -= el
    }
}
class WeaponCreator {
    constructor(weapon, damage, addDMGorc, addDMGelf) {
        this.weapon = weapon,
        this.damage = damage,
        this.addDMGorc = addDMGorc,
        this.addDMGelf = addDMGelf
    }
}

let dagger = new WeaponCreator("dagger", 5, 0)
let sword = new WeaponCreator("sword", 15)
let halebard = new WeaponCreator("halebard", 10)
let Character
const race = prompt("Choose your race")
if (race === null) {
    alert("Bye!")
} else if (race === "orc") {
    Character = new Myclass(name, 120, RNG(0, 10))
    Character.getName()
} else if (race === "elf") {
    Character = new Myclass(name, 80, RNG(0, 15))
    Character.getName()
} else {
    alert("No such race")
}

console.log(Character);







