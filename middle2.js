const assertArraysEqual = require('./assertArraysEqual.js')
const eqArrays = require('./eqArrays')

const middle = (array) => {
  if (array.length <= 2){
    return []
  }
  if(array.length % 2 === 1){
    return [Math.ceil((array.length) / 2)]
}
if(array.length % 2 === 0){
  let a = Math.floor(array.length/2)
  let b = array[a]
  return [a, b]
}
}
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5]))

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]