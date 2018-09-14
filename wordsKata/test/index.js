
const dictionay = require('./dictionary.json');

const getAllWords = () => dictionay;

const existThisWord = (arr, word) => 
  arr.filter(w => w === word)


const getWordByLength = (len) => 
  Object.keys(getAllWords())
  .filter(word => word.length == len)

const filterByLetter = (arr, origin, dest) => {
  return arr.filter(w => {
    for(let i = 0; i < origin.length; i++) {
      if( w[i] === origin[i] || w[i] === dest[i] ) {
        return true;
      }
      return false;
    }
  })
};

const getWordMapping = (origin, dest) => 
  origin.split('').reduce((acc, curr, index)=> {
    if(curr === dest[index]) {
      acc[index] = false;
    } else {
      acc[index] = dest[index];
    }
    return acc;
  }, {})


const findWordByLetterInPosition = (arr, obj) => {
  let found = false;
  let output;
  for(let i = 0; i < obj.length; i++) {
    if(obj[i]) {
       arr.filter(word => {
        return word[i] === obj[i];
      })
    }
  }
}

const matchWordsByLetter = (obj, arr, origin) => {
  let output;
  for(let i = 0; i < Object.keys(obj).length; i++) {
    if(obj[i]) {
      origin = origin.split('');
      origin[i] = obj[i];
      origin = origin.join('');
      output = existThisWord(arr, origin);
      return output;
    }
  }
}


module.exports = {
  getAllWords,
  getWordByLength,
  filterByLetter,
  getWordMapping,
  matchWordsByLetter
}
