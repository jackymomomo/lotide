
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log("Arrays not equal length")
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      // if it is an array && the arrays are not equal then return false;
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      // if the element is not an array and the items are not equal then return false
      return false;
    }
  } 
  return true;
};

module.exports = eqArrays;
// const eqArrays = require("./eqArrays");

const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`Asseertion passed ✅✅✅ : ${arg1} === ${arg2}`)
  } else {
    console.log(`Assetion failed 🛑🛑🛑: ${arg1} !== ${arg2}`)
  }
};

module.exports = assertEqual

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
for (const item of allItems){
  if (itemsToCount[item]){
    if (results[item]) {
      results[item] += 1 
      } else {
        results[item] = 1
      }
    }
    
    // console.log('results', results) 
  } 
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})

// assertEqual(result1["Jason"], 1); //logs true || passed
// assertEqual(result1["Karima"], undefined); // true || passed since karima isnt in array 
// assertEqual(result1["Fang"], 2); // true || passed since fang is true in array twice 
// assertEqual(result1["Agouhanna"], 1); // false || failed becuased Agouhanna is false in result1 variable