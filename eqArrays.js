
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(firstEl) {
  return firstEl[0];
};

module.exports = head;

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;


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

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));  // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
