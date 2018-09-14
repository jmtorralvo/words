const assert = require('assert');
const { getAllWords, getWordByLength, filterByLetter,
  getWordMapping, matchWordsByLetter } = require('./index.js');

let origin = 'LEAD';
const dest = 'GOLD';
const stepWords = [];
const letterUsed = [];

describe('Word chanin behaviour', function() {
  describe('FOOO', function() {
    const mainArr =filterByLetter(getWordByLength(4), origin, dest);
    const wordMap = getWordMapping(origin, dest);
    const bar = matchWordsByLetter(wordMap, mainArr, origin);

    for(let i = 0; i < Object.keys(obj).length; i++) {
      let result = matchWordsByLetter(wordMap, mainArr, origin);
      if(result.length){
        letterUsed.push(wordMap[i]);
        stepWords.push(result[0]);
        wordMap[i] = false;
      }
    }
  });
});

/* {
  0: G,
  1: O,
  2: L,
  3: false
} */
