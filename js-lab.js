Array.prototype.myCustomFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      // Callback function check korche condition ta true ki-na
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
  // Ekhon apni normal filter-er motoi use korte parben
  const numbers = [1, 5, 10, 15];
  const biggerThanSeven = numbers.myCustomFilter(num => num > 7);
  console.log(biggerThanSeven); // [10, 15]