const KalMia = {
  name: "TonuMia",
  generations: "Grandfather",
  cookTraditionalDish() {
    return `${this.name} cooks an ancient family recipe`;
  },
};

const pro = Object.create(KalMia);
pro.name = "update name";
pro.generations = "father";
pro.runBusiness = function name() {};

// console.log(pro.name);
