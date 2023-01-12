const assertEqual = require('./assertEqual')

const countLetters = (string1) => {
  const count = {};
  for (let num of string1){
    if (num === ' ' ) {
        continue;
    } else {
      count[num] = (count[num] || 0) + 1
    }
    
  }
  return count
}
module.exports = countLetters;
console.log(countLetters('Bananas are all the rave these days'))
