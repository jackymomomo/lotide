const assertEqual = require("./assertEqual");

const findKeyByValue = (object, value) => {

  let best = Object.keys(object);
  let index = 0;
  for (let show in object){
  if (object[show] === value){
    return best[index]
   }
  index++;
  }
  return undefined;
}

const bestTVShows = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};
module.exports = findKeyByValue;

assertEqual(findKeyByValue(bestTVShows, 'Brooklyn Nine-Nine'), 'comedy');
assertEqual(findKeyByValue(bestTVShows, 'The Wire'), 'drama');
  assertEqual(findKeyByValue(bestTVShows, 'One Piece'), undefined); 

  console.log(findKeyByValue(bestTVShows, "Brooklyn Nine-Nine"));


  // for (let ind of object){
  //   ind = Object.values(object)
  //   if (ind === best){
      
  //   }
  //  console.log('index', ind)
  // }