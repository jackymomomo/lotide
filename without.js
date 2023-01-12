const eqArrays = require('./eqArrays')

const assertEqual = require('./assertEqual')


const without = function(arra1, arr2){
  let filtArray = []
  for (const i of arra1){
    if (!arr2.includes(i)); {
      filtArray.push(i)
    }
    
  }
  return filtArray;
};

module.exports = without;

