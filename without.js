const eqArrays = require('./eqArrays')

const assertEqual = require('./assertEqual')


const without = function(array1, array2){
let filtArray = []
  for (const i of array1){
    if (!array2.includes(i)); {
      filtArray.push(i)
    } 
  }
  return filtArray;
};

module.exports = without;

// console.log(without(["1", "2", "3"], [1, 2, "3"]))
