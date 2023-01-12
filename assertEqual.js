const eqArrays = require('./eqArrays')

const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`Asseertion passed ✅✅✅ : ${arg1} === ${arg2}`)
  } else {
    console.log(`Assetion failed 🛑🛑🛑: ${arg1} !== ${arg2}`)
  }
};

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
 
module.exports = assertEqual

