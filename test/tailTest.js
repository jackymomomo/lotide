const tail = require('../tail')
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words))
// assertEqual(words.length, 3);


describe("#tail", () => {
  it("returns yo for ['yo yo', yo]", () => {
    assert.deepEqual(tail(['yo','yo']), ['yo'] );
  });
});