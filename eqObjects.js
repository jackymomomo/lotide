const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = (obj1, obj2) => {
let keys1 = Object.keys(obj1)
let keys2 = Object.keys(obj2)
let result = false;
if (keys1.length === keys2.length){
  if (keys1.length === keys2.length) {
    keys1.forEach(element => {
      if (keys2.includes(element) && obj1[element] === obj2[element]) {
        result = true;
      } else if (Array.isArray(obj1[element]) && Array.isArray(obj2[element])) {
        result = eqArrays(obj1[element], obj2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};
} 




const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
 //true
  
  const abc = { a: "1", b: "2", c: "3" };
  assertEqual (eqObjects(ab, abc))
  //false

  const gd = {g: '1', d: '2' }
  const dg = {d: '2', g: '1'}
  assertEqual(eqObjects(gd, dg), true);
  
  module.exports = eqObjects;


  // const cd2 = {c:'1', d: '2', d ['2', 3, 2] }
  // assertEqual(eqObjects(cd, cd2), false); // => false
