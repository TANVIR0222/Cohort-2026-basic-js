function TataCar(chassisNumber, modelNumber) {
  this.chassisNumber = chassisNumber;
  this.modelNumber = modelNumber;
  this.fuelLevel = 90;
}

TataCar.prototype.st = function () {
  return `Tata ${this.modelNumber} #${this.chassisNumber} | Fuel : ${this.fuelLevel}`;
};

const car1 = new TataCar("HM-10", "CCC");
const car2 = new TataCar("H-10", "C-001");

console.log(car1.st());
console.log(car2.st());
