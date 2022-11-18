

const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`Asseertion passed ✅✅✅ : ${arg1} === ${arg2}`)
  } else {
    console.log(`Assetion failed 🛑🛑🛑: ${arg1} !== ${arg2}`)
  }
};


 //assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual('banana', 'banana');
// assertEqual('buns', 'bananas');
// assertEqual(2672, 2672);

module.exports = assertEqual

