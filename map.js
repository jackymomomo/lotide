

const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// const words = ["this", "is", "ground", "control", "to", "major", "tom","youve", "really", 'Made', 'the', 'grade'];


const words = ["ground", "control", "to", "major", "tom"];


const lyrics = words.map(word => words)


const map = (array, callback) => {
  const result = [];
  for (let item of array){
    result.push(callback(item));
    
  }
  return result;
}



const results1 = map(words, word => word[0]);
assertEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word + ' ' + 'test')
assertEqual(results2, ["ground test", "control test", "to test", "major test", "tom test"]);

const results3 = map(words, word => word.length)
assertEqual(results3, [6, 7, 2, 5, 3]);

const results4 = map(words, word => word[4])
assertEqual(results4, ['n','r', undefined, 'r', undefined]);
