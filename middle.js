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

 eqArrays = require("./eqArrays");

const assertEqual = function(arg1, arg2) {
  if (eqArrays(arg1, arg2)) {
    console.log(`Asseertion passed ✅✅✅ : ${arg1} === ${arg2}`)
  } else {
    console.log(`Assetion failed 🛑🛑🛑: ${arg1} !== ${arg2}`)
  }
};

module.exports = assertEqual

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

console.log(middle([1, 2, 3])) 
console.log(middle([1, 2, 3, 4, 5])) 
console.log(middle([[1, 2, 3, 4]]))