var eqArrays = function(array1, array2) {
  let output = true;
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i += 1) {
    if (Array.isArray(array1[i]) || Array.isArray(array2[i])){
      output = output && eqArrays(array1[i], array2[i]);
    } if (array1[i] !== array2[i]){
      output = output && false;
    }    
  }
  return output;
}
module.exports = eqArrays

const eqArrays = require("./eqArrays");

const assertEqual = fucntion(arg1, arg2); {
  if (eqArrays(arg1, arg2)) {
    console.log(`Asseertion passed ✅✅✅ : ${arg1} === ${arg2}`)
  } else {
    console.log(`Assetion failed 🛑🛑🛑: ${arg1} !== ${arg2}`)
  }
};

module.exports = assertEqual