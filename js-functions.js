// function oldBrewingLog() {
//   console.log("type", typeof arguments);
//   console.log(arguments);
//   console.log(Array.isArray(arguments));

//   const argArray = Array.from(arguments);

//   console.log(argArray);
// }

// oldBrewingLog("sage", "Rosemary");

const oldBrewingLog = () => {
  try {
    console.log(arguments);
  } catch (error) {
    console.log(error);
  }
};

oldBrewingLog();
