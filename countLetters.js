const assertEqual = function(arg1, arg2) {
  if (arg1 === arg2) {
    console.log(`Asseertion passed ✅✅✅ : ${arg1} === ${arg2}`)
  } else {
    console.log(`Assetion failed 🛑🛑🛑: ${arg1} !== ${arg2}`)
  }
};

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

console.log(countLetters('Bananas are all the rave these days'))
