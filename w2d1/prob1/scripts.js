/**
 * @param {Integer list} intList 
 * @returns {Integer} sum of all elements
 */
function sum(intList){
  return intList.reduce((accum, elem) => elem + accum);
}

/**
 * 
 * @param {Integer list} intList
 * @returns {Integer} product of all elements
 */
function multiply(intList){
  return intList.reduce((accum, elem) => accum * elem);
}

/**
 * 
 * @param {String} str 
 * @returns {String} with reversed value
 */
function reverse(str){
  return str.split('').reduce((reversed, character) => character + reversed, '')
}

/**
 * 
 * @param {String list} words
 * @returns {String}
 */
function findLongestWord(words){
  return words.reduce((x, y)=> x.length < y.length ? x : y);
}

/**
 * 
 * @param {String list} words 
 * @param {Integer} minLen 
 * @returns {String list} contains element that length greater than minLen
 */
function filterLongWords(words, minLen){
  return words.filter((elem) => elem.length > minLen);
}

/**
 * 
 * @param {Integer list} digits 
 * @returns {Integer list} new List multiplied by ten
 */
function multiplyByTen(digits){
  return digits.map((elem)=>elem * 10);
}

/**
 * 
 * @param {Integer list} digits 
 * @returns list with threes
 */
function filterEqualThree(digits){
  return digits.filter((elem)=>elem === 3);
}

/**
 * 
 * @param {object or primitive type} expected 
 * @param {*} fn 
 * @returns {String} value "TEST SUCCEEDED" or "TEST FAILED"
 */
function myFunctionTest(expected, fn){
  let res = fn();
  let resType = typeof(res);

  console.assert(resType === typeof(expected), "Expected type is wrong");

  if (resType !== "object" && res === expected){
      return "TEST SUCCEEDED";
  }
  if (resType === "object"){
    if( JSON.stringify(res) === JSON.stringify(expected)){
      return "TEST SUCCEEDED";
    }
  }      
  return "TEST FAILED.  Expected " + expected + " found " + res;
}