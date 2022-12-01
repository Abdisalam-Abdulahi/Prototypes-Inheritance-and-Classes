/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(createdAt, name, dimensions) {
  this.createdAt = createdAt;
  this.name = name;
  this.dimensions = dimensions;
}
GameObject.prototype = {
  destroy() {
    return `${this.name} was removed from the game.`;
  },
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(createdAt, dimensions, name, healthPoints) {
  GameObject.call(this, createdAt, name, dimensions);
  this.healthPoints = healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(
  createdAt,
  dimensions,
  name,
  healthPoints,
  team,
  weapons,
  language
) {
  CharacterStats.call(this, createdAt, dimensions, name, healthPoints);
  this.team = team;
  this.weapons = weapons;
  this.language = language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
  return `${this.name} offers greating in ${this.language}`;
};
// const final = new Humanoid(1, 2, "cali", 7,3,9,"somali");
// console.log(final.greet());
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue",
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue",
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish",
});
// I think they are multiple nested object because I could't able to find the information without using creatAt as assistance
// the last three functions return something like this:
//undefined offers greating in undefined prototypes.js:146:10
//undefined took damage. prototypes.js:147:11
//undefined was removed from the game.
//other than that every think works as expected

console.log(mage);
console.log(mage.createdAt.createdAt); // Today's date
console.log(archer.createdAt.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.createdAt.healthPoints); // 15
console.log(mage.createdAt.name); // Bruce
console.log(swordsman.createdAt.team); // The Round Table
console.log(mage.createdAt.weapons); // Staff of Shamalama
console.log(archer.createdAt.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
