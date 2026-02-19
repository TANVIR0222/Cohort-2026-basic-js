// Hero Object Example
const hero = {
  name: "Tanvir",
  class: "cahiaurcode",
  level: 12,
  health: 80,
  mana: 56,
  isActive: true,
};

// Accessing object properties
console.log(hero.name); // Dot notation
console.log(hero["class"]); // Bracket notation (useful for keys with spaces or special chars)
// console.log(hero["js basic"]); // undefined because property doesn't exist

// Deleting a property
delete hero.name;
console.log("After deleting name:", hero);

// Checking if a property exists
console.log("chai" in hero); // false
console.log("class" in hero); // true
console.log("toString" in hero); // true (inherited from prototype)

// Using hasOwnProperty to check only own properties
console.log(hero.hasOwnProperty("toString")); // false (inherited, not own property)
console.log(hero.hasOwnProperty("class")); // true (own property)
