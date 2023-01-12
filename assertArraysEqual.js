
const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arg1, arg2) {
  if (eqArrays(arg1, arg2)) {
    console.log(`Asseertion passed ✅✅✅ : ${arg1} === ${arg2}`)
  } else {
    console.log(`Assetion failed 🛑🛑🛑: ${arg1} !== ${arg2}`)
  }
};

module.exports = assertArraysEqual

console.log(':) <3')