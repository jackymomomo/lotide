const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let position = 0; position < sentence.length; position++) {
 let letter = sentence[position];
 if (letter === ' ') {
  
    continue;
  } if (!results[letter]) {
    results[letter] = [position];
    } else {
      results[letter].push(position)
    }
  }
  return results;
};
console.log(letterPositions('bananas are all the rave nowadays'))

console.log(assertEqual(letterPositions("hello").e, [1]))

module.exports = letterPositions;