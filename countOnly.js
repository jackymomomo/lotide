const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

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
module.exports = countOnly;
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