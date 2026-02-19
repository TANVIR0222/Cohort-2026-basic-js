// Object Basics Examples
const user = {
  name: "Tanvir",
  age: 22,
  profession: "React Native Developer",
  isActive: true,
};

// Get keys, values, entries

const keys = Object.keys(user); // ["name", "age", "profession", "isActive"]
const values = Object.values(user); // ["Tanvir", 22, "React Native Developer", true]
const entries = Object.entries(user); // [["name", "Tanvir"], ["age", 22], ...]

// Log entries
for (const [key, value] of entries) {
  //   console.log(`${key}: ${value}`);
}

// Merge objects with Object.assign

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
Object.assign(target, source); // same key replaced: b:2 -> b:4
// console.log(target); // { a: 1, b: 4, c: 5 }

// Freeze object (immutable)

const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 20; // Won't change
// console.log(obj.prop); // 42

// Convert entries array to object

const entriesArray = [
  ["foo", "bar"],
  ["baz", 42],
];
const convertedObj = Object.fromEntries(entriesArray);
// console.log(convertedObj); // { foo: "bar", baz: 42 }

// Seal object (cannot add/delete, can modify existing)

const user2 = {
  name: "Tanvir",
  age: 25,
};

// Object.seal(user2);
// user2.age = 22;     // Allowed
// user2.city = "Dhaka"; // Not allowed
// delete user2.name;   // Not allowed
// console.log(user2);

// Define property with descriptor

Object.defineProperty(user2, "a", {
  value: 37,
  writable: false, // cannot change value
  enumerable: true, // shows in loops and Object.keys
  configurable: true, // can delete or modify descriptor later
});

// Trying to modify writable=false property
user2.a = 50; // Won't change
// console.log(user2);

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(user2, "name");
// console.log(descriptor);

// Object & Property Methods

// Example 1: Get all property descriptors of an object
const object1 = { age: 42 };
const allProp = Object.getOwnPropertyDescriptors(object1);
console.log("Property descriptors of object1:", allProp);

// Example 2: Get symbols of an object
const object2 = { a: 1, b: 2, c: 3 };
// Note: object2 has no symbols, so output will be []
console.log("Symbols of object2:", Object.getOwnPropertySymbols(object2));

// Object.groupBy Example
const students = [
  { name: "Tom", grade: "A" },
  { name: "Amy", grade: "B" },
  { name: "Bob", grade: "A" },
  { name: "Sam", grade: "C" },
];

// Group students by their grade
const grouped = Object.groupBy(students, (student) => student.grade);
console.log("Students grouped by grade:", grouped);

ole.log(grouped);
