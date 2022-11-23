const assertEqual = require('./assertEqual');
const head = require('./head')
const tail = require('./tail')
const middle = require('./middle')
const countOnly = require('./countOnly')
const countLetters = require('./countLetters')
const eqObjects = require('./eqObjects')
const takeUntil = require('./takeUntil');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertArraysEqual')
const findKeyByValue = require('./findKeyByValue')
const findKey = ('./findKey')


module.exports = {
  head : head ,
  tail: tail,
  middle: middle,
  assertEqual :assertEqual,
  countOnly: countOnly,
  countLetters: countLetters,
  takeUntil: takeUntil,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  assertObjectsEqual: assertObjectsEqual,
  findKey: findKey
  
}
