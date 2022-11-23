
const eqArrays = require("./eqArrays");

const assertEqual = require('./assertEqual')

const middle = function(midIndex) {
  if (midIndex.length <= 2) {
    return [];
  } if (midIndex.length % 2 == 0) {
    return [midIndex[Math.ceil((midIndex.length / 2) - 1)], midIndex[Math.ceil((midIndex.length) / 2)]];
  } if (midIndex.length % 2 === -1){
return midIndex.slice(midIndex.length / 2 - 1, midIndex.length / 2 + 1)
  } else {
    let newArray = [];
     let middleNum = Math.round(midIndex.length /2)
     newArray.push(midIndex[middleNum -1]);
     return newArray;
  };
}

module.exports = middle 

 