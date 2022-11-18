
const eqArrays = require("./eqArrays");

const eqObjects = require("./eqObjects"); 


const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect
  
  if (eqObjects(actual, expected)) {
    console.log(`Asseertion passed ✅✅✅ : ${inspect(actual)} === ${inspect(actual)} gg`);
  } else { 
    console.log(`Assertion failed stupid ! 🛑🛑🛑:  ${inspect(actual)} !== ${inspect(actual)}`)
  }
  

};
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // => true

