/**
 * 1. Global Context and Strict Mode
 * In a regular function, 'this' refers to the global object (window/global).
 * In 'strict mode', 'this' remains undefined if not explicitly set.
 */
function doraemon() {
  // In non-strict mode, 'this' is the global object, so typeof is "object"
  return typeof this;
}

function doraemonWithNobita() {
  "use strict";
  // In strict mode, 'this' is not defaulted to global object
  return this;
}

console.log("Global this:", doraemon()); // Output: "object"
console.log("Strict this:", doraemonWithNobita()); // Output: undefined

/**
 * 2. Basic Object Method
 * When a function is called as a method of an object, 'this' points to the object.
 */
const animeDoraemon = {
  name: "Doraemon Anime",
  lead: "Nobita",
  introduce() {
    return `${this.name} & ${this.lead}`;
  },
};

console.log("Object Method:", animeDoraemon.introduce());

/**
 * 3. Arrow Functions in Loops
 * Arrow functions do not have their own 'this'. They inherit it from the parent scope.
 */
const japaneseAnimeDoraemon = {
  name: "Doraemon",
  actors: ["Nobita", "Shizuka", "Gian"],
  announceCast() {
    // Arrow function inherits 'this' from announceCast()
    this.actors.forEach((actor) => {
      console.log(`${this.name} actor: ${actor}`);
    });
  },
};

japaneseAnimeDoraemon.announceCast();

/**
 * 4. The Nested Function Problem (and Fix)
 * Regular functions inside methods lose the 'this' context.
 */
const anime = {
  crew: "Spot Boy",
  prepareProps() {
    console.log(`Outer context: ${this.crew}`); // Works

    // Fixing the inner function using an Arrow Function
    const actor = () => {
      console.log(`Inner context (Fixed with Arrow): ${this.crew}`);
    };
    actor();
  },
};

anime.prepareProps();

/**
 * 5. Detached Method (The "Losing this" Problem)
 * Copying a method to a variable separates it from its object.
 */
const user = {
  name: "Tanvir",
  greet() {
    // If 'this' is lost, this.name will be undefined
    console.log(`Hello, I am ${this.name || "Unknown"}`);
  },
};

// Normal call
user.greet(); // Output: Hello, I am Tanvir

// Detaching the method
const detachedGreet = user.greet;
detachedGreet(); // Output: Hello, I am Unknown (this is lost!)

/**
 * 6. Fixing Detached Methods with .bind()
 * .bind() creates a new function where 'this' is permanently locked.
 */
const fixedGreet = user.greet.bind(user);
fixedGreet(); // Output: Hello, I am Tanvir
