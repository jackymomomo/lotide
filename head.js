const _ = require('lodash');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 
};

head = (firstEl) => {
  return firstEl[0];
};
module.exports = head;



assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('banana', 'banana');
assertEqual('buns', 'bananas');
assertEqual(2672, 2672);

assertEqual(head([5,6,7]));