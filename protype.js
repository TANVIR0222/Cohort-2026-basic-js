const tanumia = {
  name: "tanuRaj",
  generation: "grandFather",
  cookieTraditionalDish() {
    return `${this.name} cooks `;
  },
};

const tanvir = Object.create(tanumia);
// console.log(tanvir.name);

tanvir.cookieTraditionalDish = function () {
  return `${this.name} runs the family business `;
};

// console.log(tanvir);

// ai prototype type ta protita object ba array te theke ta amra caile nijer mot change krte ba update krte pari -> caile func ba string use krte pari
// Array aktu data type ar prototype a amra cile nijer mot customize krte pari.
Array.prototype.last = function () {
  return this[this.length - 1];
};

// console.log([1, 2, 3].last());

function thisFunc() {
  console.log(arguments);
}

thisFunc("tahvir ", "ask", "sdh");
thisFunc("tahvir ");
thisFunc("tahvir ");
thisFunc("tahvir ");
thisFunc("tahvir ");
