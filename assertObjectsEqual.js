
const eqArrays = require("./eqArrays");

const eqObjects = require("./eqObjects"); 


const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect
  
  if (eqObjects(actual, expected)) {
    console.log(`Asseertion passed ✅✅✅ : ${inspect(actual)} === ${inspect(actual)} gg`);
  } else { 
    console.log(`Assertion failed stupid ! 🛑🛑🛑:  ${inspect(actual)} !== ${inspect(actual)}`)
  }
  

};
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // => true

module.exports = assertObjectsEqual;


var nyc = {
  name: 'New York City',
  boroughs: [
    'Manhattan',
    'Queens',
    'Brooklyn',
    'The Bronx',
    'Staten Island'],
  population: 8491079,
  area_codes: [212, 347, 646, 718, 917, 929],
  position: { lat: 40.7127, lng: -74.0059 }
}

console.log(nyc['boroughs'][1])

