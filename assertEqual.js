

const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`Asseertion passed ✅✅✅ : ${arg1} === ${arg2}`)
  } else {
    console.log(`Assetion failed 🛑🛑🛑: ${arg1} !== ${arg2}`)
  }
};


 
module.exports = assertEqual

