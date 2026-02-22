// call and apply => basic chef
// bind => allTime return a new functions;
/**
 * Function Context Control: call, apply, and bind
 */

function cookDish(ingredient, style) {
  return `${this.name} prepared ${ingredient} in ${style} style.`;
}

const myKitchen = { name: "Tanvir's Kitchen" };
const guestKitchen = { name: "Guest's Kitchen" };

const ingredientsArray = ["Chicken", "Spices", "Oil"];

// 1. .call() -> Invokes the function immediately.
// Arguments are passed individually (comma-separated).
console.log("Using .call():", cookDish.call(myKitchen, "Omelette", "Classic"));

// 2. .apply() -> Invokes the function immediately.
// Arguments are passed as an ARRAY.
// Useful when dealing with lists or dynamic data.
console.log(
  "Using .apply():",
  cookDish.apply(guestKitchen, [ingredientsArray, "BBQ"])
);

// 3. .bind() -> Does NOT invoke immediately.
// It returns a NEW function with 'this' permanently bound.
const prepareMySpecialty = cookDish.bind(myKitchen, "Steak", "Grilled");
console.log("Using .bind():", prepareMySpecialty()); // Called later

/**
 * Use Case: Math with Array
 */
const scores = [45, 89, 92, 34, 78];

// Older way using .apply()
const maxScoreApply = Math.max.apply(null, scores);

// Modern ES6 way using Spread Operator (...)
const maxScoreSpread = Math.max(...scores);

console.log(`Max Score (Apply): ${maxScoreApply}`);
console.log(`Max Score (Spread): ${maxScoreSpread}`);
